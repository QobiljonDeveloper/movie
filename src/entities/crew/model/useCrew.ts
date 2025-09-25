import { useQuery } from "@tanstack/react-query";
import { fetchCrewById, fetchCrewMoviesById } from "../api/fetApi";

export const useCrew = () => {
  const getCrewById = (id: string) =>
    useQuery<any, any>({
      queryKey: ["crewKey", id],
      queryFn: () => fetchCrewById(id),
    });

  const getCrewMovieById = (id: string) =>
    useQuery<any, any>({
      queryKey: ["crewKey", id, "movies"],
      queryFn: () => fetchCrewMoviesById(id),
    });

  return { getCrewById, getCrewMovieById };
};
