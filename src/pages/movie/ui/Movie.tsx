import { memo } from "react";
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  return (
    <div className="About">
      <MovieList movies={data?.results} />
    </div>
  );
});
