// Home.tsx
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Hero } from "@/widgets/hero";
import { MdKeyboardArrowRight } from "react-icons/md";

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

      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <p className="font-inter font-medium dark:text-white text-[20px]">
            На неделе
          </p>
          <div className="text-py flex items-center justify-center cursor-pointer">
            <p className="font-inter font-medium text-[20px]">Показать все</p>
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>
      <MovieList movies={data?.results?.slice(0, 8)} />
    </div>
  );
});
