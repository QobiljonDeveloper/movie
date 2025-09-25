import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className=" rounded-lg overflow-hidden shadow-md">
      <div onClick={() => navigate(`/movies/${movie.id}`)}>
        {movie.poster_path ? (
          <img
            src={createImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full h-[300px] object-cover"
          />
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center bg-gray-800 text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="p-3">
        <h3
          className="line-clamp-1 font-semibold text-sy dark:text-white"
          title={movie.title}
        >
          {movie.title} - {movie.original_language.toUpperCase()}
        </h3>
        <p className="text-th font-inter font-medium">Test</p>
      </div>
    </div>
  );
});
