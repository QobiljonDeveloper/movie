import { memo, type FC, useState } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image, Tabs } from "antd";
import dayjs from "dayjs";
import { NavLink, useLocation } from "react-router-dom";
import { Title } from "../../../../shared/ui";

interface Props {
  id: string;
}

const tabs = [
  { path: "", label: "Review" },
  { path: "cast", label: "Cast" },
  { path: "others", label: "Other" },
];


export const MovieInfo: FC<Props> = memo(({ id }) => {
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");


  

  return (
    <div className="flex flex-col gap-8">
      <section className="container relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt={data?.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-end p-6 md:p-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            {data?.title}
          </h1>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={createImageUrl(data?.poster_path)}
            alt={data?.title}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-white">{data?.title}</h2>
          <p className="text-gray-500 dark:text-gray-300">
            Budget: {data?.budget?.toLocaleString()} USD
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            Release Date: {data?.release_date}
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            Original Language: {data?.original_language?.toUpperCase()}
          </p>
          {data?.homepage && (
            <a
              href={data.homepage}
              target="_blank"
              className="text-py font-medium hover:underline"
            >
              Official Website
            </a>
          )}
        </div>
      </section>

      {imageData?.backdrops?.length > 0 && (
        <section className="container flex flex-col gap-4">
          <Title>Gallery</Title>
          <div className="flex overflow-x-auto gap-3 pb-2">
            {imageData?.backdrops.slice(0, 20).map((item: any, inx: number) => (
              <Image
                key={inx}
                className="min-w-[200px] rounded-lg hover:scale-105 transition-transform duration-300"
                src={createImageUrl(item.file_path)}
                alt={`Gallery image ${inx + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      <div className="container flex gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 font-medium ${
                isActive
                  ? "border-b-2 border-py text-py dark:text-white"
                  : "text-gray-400 dark:text-gray-300"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

  
    </div>
  );
});
