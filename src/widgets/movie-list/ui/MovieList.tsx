import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";

interface Props {
  movies: IMovie[];
}

export const MovieList: FC<Props> = memo(({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="dark:text-white text-lg text-sy">Film not found</p>
      </div>
    );
  }

  return (
    <div className="container py-12">
    

      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
});
