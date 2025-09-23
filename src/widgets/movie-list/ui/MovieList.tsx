import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  movies: IMovie[];
}

export const MovieList: FC<Props> = memo(({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-white text-lg">Фильмы не найдены</p>
      </div>
    );
  }

  return (
    <div className="container mt-12">
      <div className="flex justify-between items-center mb-5">
        <p className="font-inter font-medium text-white text-[20px]">
          На неделе
        </p>
        <div className="text-py flex items-center justify-center cursor-pointer">
          <p className="font-inter font-medium text-[20px]">Показать все</p>
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
});
