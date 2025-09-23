// Home.tsx
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Hero } from "@/widgets/hero";

export const Home = memo(() => {
  const { getMovies } = useMovie();
  const { data, isLoading, isError } = getMovies();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-white text-xl animate-pulse">Загрузка...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-red-500 text-xl">
          Произошла ошибка! Попробуйте снова.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <MovieList movies={data?.results?.slice(0, 8)} />
    </div>
  );
});
