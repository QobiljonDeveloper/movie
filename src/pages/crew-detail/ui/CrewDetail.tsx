import { memo } from "react";
import { CrewView, useCrew } from "@/entities/crew";
import { useParams } from "react-router-dom";
import { MovieList } from "../../../widgets/movie-list";

export const CrewDetail = memo(() => {
  const { id } = useParams();
  const { getCrewMovieById } = useCrew();
  const { data: moviesCrew } = getCrewMovieById(id as string);

  return (
    <div>
      <CrewView />
      <MovieList movies={moviesCrew?.cast} />
    </div>
  );
});
