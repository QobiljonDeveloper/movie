import { memo } from "react";
import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { MoviePagination } from "@/features/movie-pagination";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "@/widgets/movie-sort";
import { MovieCardSkeleton } from "@/shared/ui";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "";
  const gte = searchParams.get("gte") ?? "";
  const lte = searchParams.get("lte") ?? "";
  const with_genres = searchParams.get("with_genres") ?? "";

  const { data, isLoading } = getMovies({
    page,
    sort_by,
    "primary_release_date.gte": gte,
    "primary_release_date.lte": lte,
    with_genres,
  });

  return (
    <div className="About">
      <div className="container flex justify-between items-center gap-4">
        <MovieSort />
      </div>

      {isLoading ? (
        <MovieCardSkeleton count={8} />
      ) : (
        <MovieList movies={data?.results} />
      )}
      <MoviePagination page={page} total_pages={data?.total_pages} />
    </div>
  );
});
