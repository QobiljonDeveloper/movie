import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { MovieList } from "@/widgets/movie-list";
import { Empty, Input } from "antd";
import useDebounce from "@/shared/hooks/useDebounce";
import { useTranslation } from "react-i18next";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);
  const { data, isFetching } = getMovieBySearch({ query: debounceValue });
  const { t } = useTranslation();

  return (
    <div className="py-6">
      <div className="container">
        <Input.Search
          value={value}
          placeholder={t("search_placeholder")}
          enterButton
          allowClear
          size="large"
          onChange={(e) => setValue(e.target.value)}
 
/>
      </div>

      <div className="container mt-6">
        {!debounceValue && (
          <div className="flex justify-center items-center py-20">
            <p className="dark:text-white text-lg text-sy">
              {t("search_message")}
            </p>
          </div>
        )}

        {debounceValue && (
          <>
            <MovieList movies={data?.results} />
            {!data?.results?.length && !isFetching && (
              <Empty
                className="dark:text-gray-300 text-gray-500"
                description={t("fil_not_found")}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
});
