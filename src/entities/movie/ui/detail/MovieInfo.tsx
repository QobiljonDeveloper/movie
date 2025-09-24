import { memo, type FC, useState } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import dayjs from "dayjs";

interface Props {
  id: string;
}

const defaultImage =
  "data:image/jpeg;base64,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";

export const MovieInfo: FC<Props> = memo(({ id }) => {
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  const { data: reviewData } = getMovieInfo(id, "reviews  ");

  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderContent = (content: string, id: string) => {
    const words = content.split(" ");
    const isExpanded = expandedIds.includes(id);

    if (words.length <= 50) return <p>{content}</p>;

    return (
      <p>
        {isExpanded ? content : words.slice(0, 50).join(" ") + "..."}{" "}
        <span
          onClick={() => toggleExpand(id)}
          className="text-py font-medium hover:underline cursor-pointer"
        >
          {isExpanded ? "Show less" : "Show more"}
        </span>
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
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

      {/* Movie info */}
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
          <h3 className="text-xl font-semibold mb-2">Gallery</h3>
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

      {reviewData?.results?.length > 0 && (
        <section className="container flex flex-col gap-6">
          <h3 className="text-xl font-semibold">Reviews</h3>
          <div className="flex flex-col gap-4">
            {reviewData.results.map((review: any) => (
              <div
                key={review.id}
                className="flex flex-col md:flex-row gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <img
                    src={
                      review.author_details.avatar_path
                        ? review.author_details.avatar_path.startsWith("/")
                          ? createImageUrl(review.author_details.avatar_path)
                          : review.author_details.avatar_path
                        : defaultImage
                    }
                    alt={review.author_details.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-white dark:text-gray-200">
                      {review.author_details.username || review.author}
                    </p>
                    <span className="text-gray-400 text-sm">
                      {dayjs(review.created_at).format("MMM D, YYYY")}
                    </span>
                  </div>

                  <div className="text-gray-700 dark:text-gray-300">
                    {renderContent(review.content, review.id)}
                  </div>

                  {review.url && (
                    <a
                      href={review.url}
                      target="_blank"
                      className="text-py font-medium hover:underline mt-1"
                    >
                      Read full review
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
});
