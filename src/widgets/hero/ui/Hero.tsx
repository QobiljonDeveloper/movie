import { memo } from "react";
import { MySwiper } from "@/entities/swiper";
import { useMovie } from "../../../entities/movie";

export const Hero = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  return (
    <div className="container mb-14 ">
      <MySwiper data={data?.results?.slice(0, 6)} />
    </div>
  );
});
