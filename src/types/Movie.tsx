
export interface MovieMinify extends Pick<Movie, "id" | "title" | "overview" | "poster_path" | "vote_average" | "release_date" > {}

export interface Movie {
  id: number
  title: string
  tagline: string
  overview: string
  release_date: string
  runtime: number
  vote_average: number
  poster_path: string
  genres: Genre[]
  credits: Credits
}

export interface Genre {
  id: number
  name: string
}

export interface Credits {
  cast: CastMember[]
}

export interface CastMember {
  id: number
  name: string
  character: string
}
