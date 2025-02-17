import { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import { useSelector } from "react-redux";
import { useGetPopularMoviesQuery, useSearchMoviesQuery,
} from "@/store/services/movieApi";
import { RootState } from "@/store/store";
import Pagination from "@/components/Pagination";
import { MovieList } from "@/components/MovieList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.pagination
  );
  const { genre, rating, year } = useSelector(
    (state: RootState) => state.filters
  );

  const { data: popularMovies, isLoading: isLoadingPopular } =
    useGetPopularMoviesQuery({
      page: currentPage,
      genre: genre,
      rating: rating,
      year: year,
    });
  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    error,
  } = useSearchMoviesQuery(
    { query: searchTerm, page: currentPage },
    { skip: !searchTerm }
  );

  const movies = searchTerm ? searchResults?.movies : popularMovies?.movies;
  // const isLoading = isLoadingPopular || isLoadingSearch

  const { theme, setTheme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full py-4 px-4 sm:px-6 relative flex items-center justify-between bg-card">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] bg-black border-neutral-800 p-6"
          >
            <Filters />
          </SheetContent>
        </Sheet>
        <SearchBar onSearch={setSearchTerm} />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      <main className="container py-8 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-48 flex-shrink-0 hidden lg:block">
            <Filters />
          </aside>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-6">
              Películas más populares
            </h1>
            {movies && <MovieList movies={movies} />}

            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}
