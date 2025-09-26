import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import type { RootState } from "../../../app/store";
import { toggleBookmark } from "../model/bookmarkSlice";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo(({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.bookmarks.saved);

  const isSaved = saved.some((m) => m.id === movie.id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleBookmark(movie));
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group">
      <div onClick={() => navigate(`/movies/${movie.id}`)}>
        {movie.poster_path ? (
          <img
            src={createImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full object-cover"
          />
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center bg-gray-800 text-gray-400">
            No Image
          </div>
        )}
      </div>

      <button
        onClick={handleBookmark}
        className={`
    absolute top-2 right-2 p-2 rounded-full transition
    md:opacity-0 md:group-hover:opacity-100 
    opacity-100                             
    ${
      isSaved
        ? "bg-py text-white dark:bg-py dark:text-white"
        : "bg-black/50 text-white dark:bg-white/30 dark:text-black hover:bg-py hover:text-white"
    }
  `}
      >
        {isSaved ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
      </button>
      <div className="p-3">
        <h3
          className="line-clamp-1 font-semibold text-sy dark:text-white"
          title={movie.title}
        >
          {movie.title} - {movie.original_language.toUpperCase()}
        </h3>
        <p className="text-th font-inter font-medium">{movie.vote_average}</p>
      </div>
    </div>
  );
});
