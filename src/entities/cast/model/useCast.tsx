import { useQuery } from "@tanstack/react-query";
import { fetchCastById } from "../api/fetchApi";

export const useCast = () => {
  const getCasts = (id: string) =>
    useQuery<any, any>({
      queryKey: ["castKey", id],
      queryFn: () => fetchCastById(id),
    });

  return { getCasts };
};
