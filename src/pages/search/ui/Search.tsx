import { memo } from "react";
import { SearchMovie } from "../../../features/movie-search";

export const Search = memo(() => {
  return (
    <div>
      <SearchMovie />
    </div>
  );
});
