import type React from "react";
import Link from "next/link";
import Image from "next/image";
import type { MovieMinify } from "../types/Movie";
import { Card } from "./ui/card";

interface MovieListProps {
  movies: MovieMinify[];
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {movies?.map((movie) => (
        <Card
          key={movie.id}
          className="bg-card text-card-foreground overflow-hidden cursor-pointer transition-transform hover:scale-105"
        >
          <Link href={`/movie/${movie.id}`}>
            <div className="aspect-square relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3 sm:p-4 space-y-1">
              <h3 className="font-medium line-clamp-1">{movie.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{movie.release_date}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < movie.vote_average
                          ? "bg-rose-500"
                          : "bg-neutral-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};
