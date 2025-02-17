import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setTotalPages } from "../slices/paginationSlice";
import type { Movie, MovieMinify } from "@/types/Movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// 🔹 Tipos de respuesta de la API
interface MoviesResponse {
  results: MovieMinify[];
  total_pages: number;
}

interface SearchMoviesArgs {
  query?: string;
  page?: number;
  genre?: number | null; // ID del género de la película
  rating?: number | null; // Calificación mínima (1-10)
  year?: number | null; // Año de lanzamiento
}

// 🔹 Configuración de Redux Toolkit Query
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      if (API_KEY) {
        headers.set("Authorization", `Bearer ${API_KEY}`);
      }
      return headers;
    },
  }),
  endpoints: (builder,) => ({
    // Obtener películas populares
    getPopularMovies: builder.query<{ movies: MovieMinify[]; totalPages: number }, SearchMoviesArgs>({
      query: ({ page, genre, year, rating, query }) => {
        let url = `/discover/movie?page=${page}&sort_by=popularity.desc`;
        if (genre) url += `&with_genres=${genre}`;
        if (year) url += `&primary_release_year=${year}`;
        if (rating) url += `&vote_average.gte=${rating}`;
        if (query) url += `&with_keywords=${query}`;
    
        return url;
      },
      async onQueryStarted(queryArgument, {dispatch, queryFulfilled}) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTotalPages(data.totalPages)); // Modifica el estado de Redux
        } catch (error) {
          console.error("Error al obtener películas populares:", error);
        }
      },
      transformResponse: (response: MoviesResponse) => {
        console.log(response);
        return {
          movies: response.results,
          totalPages: response.total_pages,
        };
      },
    }),

    // Buscar películas
    searchMovies: builder.query<{ movies: MovieMinify[]; totalPages: number }, SearchMoviesArgs>({
      query: ({ query, page = 1 }) => `/search/movie?query=${query ?? ""}&page=${page}`,
      transformResponse: (response: MoviesResponse) => {
        return {
          movies: response.results,
          totalPages: response.total_pages,
        };
      },
    }),

    // Obtener detalles de una película
    getMovieDetails: builder.query<Movie, number>({
      query: (movieId) => `/movie/${movieId}?append_to_response=credits`,
    }),

    // Obtener géneros de películas
    getGenres: builder.query<{ genres: { id: number; name: string }[] }, void>({
      query: () => '/genre/movie/list',
    }),
  }),
});

// 🔹 Exportar hooks generados por RTK Query
export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
  useGetGenresQuery,
} = movieApi;
