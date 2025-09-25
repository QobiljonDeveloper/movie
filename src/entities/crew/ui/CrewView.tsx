import { memo, useState } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "../../../shared/utils";
import { FaBirthdayCake, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import type { ICrew } from "../../movie";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data, isLoading } = getCrewById(id as string);
  const [showFullBio, setShowFullBio] = useState(false);

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="animate-pulse flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 h-96 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md" />
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded" />
          </div>
        </div>
      </div>
    );
  }

  const crew: ICrew = data as ICrew;

  return (
    <div className="container py-10 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-64 h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
        {crew.profile_path ? (
          <img
            src={createImageUrl(crew.profile_path)}
            alt={crew.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 text-lg font-semibold">
            No Image
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-sy dark:text-white">
          {crew.name}
        </h1>
        <p className="text-sy dark:text-gray-400 italic">
          {crew.known_for_department}
        </p>

        <div className="flex flex-wrap gap-4 text-sy dark:text-gray-400">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg shadow-sm">
            <FaBirthdayCake /> {crew.birthday}{" "}
            {crew.deathday ? `(died: ${crew.deathday})` : ""}
          </div>
          {crew.place_of_birth && (
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg shadow-sm">
              <FaMapMarkerAlt /> {crew.place_of_birth}
            </div>
          )}
          {crew.homepage && (
            <div className="flex items-center gap-2 text-py dark:text-py px-3 py-1 rounded-lg hover:shadow-md transition-shadow">
              <FaLink />
              <a
                href={crew.homepage}
                target="_blank"
                className="hover:underline"
              >
                Official Website
              </a>
            </div>
          )}
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-sy dark:text-white mb-2 text-xl">
            Biography
          </h2>
          <p
            className={`text-sy dark:text-gray-300 whitespace-pre-line transition-all duration-300 ${
              !showFullBio ? "line-clamp-6" : ""
            }`}
          >
            {crew.biography}
          </p>
          {crew.biography.length > 300 && (
            <button
              className="mt-2 text-py dark:text-py font-medium hover:underline"
              onClick={() => setShowFullBio(!showFullBio)}
            >
              {showFullBio ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {crew.also_known_as.length > 0 && (
          <div className="mt-4">
            <h2 className="font-semibold text-gray-900 dark:text-white mb-2 text-xl">
              Also Known As
            </h2>
            <ul className="list-disc list-inside text-sy dark:text-gray-400">
              {crew.also_known_as.map((alias, idx) => (
                <li key={idx}>{alias}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
