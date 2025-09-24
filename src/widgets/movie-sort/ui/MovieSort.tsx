import { memo } from "react";
import { SortBy } from "@/features/sort-by";
import { MovieDateFilter } from "@/features/movie-date-filter/ui/MovieDateFilter";
import { MovieGenreFilter } from "@/features/movie-genre-filter";

export const MovieSort = memo(() => {
  return (
    <div className="container flex items-center gap-10">
      <SortBy />
      <MovieDateFilter />
      <MovieGenreFilter />
    </div>
  );
});
