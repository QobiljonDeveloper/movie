import { api } from "@/shared/api";
import type { IMovieParams } from "../model/types";

export const fetchMovies = async (params?: IMovieParams) => {
  const response = api.get("discover/movie", {
    params: {
      without_genres: "18,36,27,10402,10749",
      with_genres: "16",
      ...params,
    },
  });
  return (await response).data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieInfo = async (id: string, path: string) => {
  const response = await api.get(`/movie/${id}/${path}`);
  return response.data;
};
