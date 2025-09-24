import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const SortBy = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  const options = [
    { value: "original_title.asc", label: "Original Title ↑" },
    { value: "original_title.desc", label: "Original Title ↓" },
    { value: "title.asc", label: "Title ↑" },
    { value: "title.desc", label: "Title ↓" },
    { value: "primary_release_date.asc", label: "Release Date ↑" },
    { value: "primary_release_date.desc", label: "Release Date ↓" },
    { value: "popularity.asc", label: "Popularity ↑" },
    { value: "popularity.desc", label: "Popularity ↓" },
    { value: "revenue.asc", label: "Revenue ↑" },
    { value: "revenue.desc", label: "Revenue ↓" },
    { value: "vote_average.asc", label: "Vote Average ↑" },
    { value: "vote_average.desc", label: "Vote Average ↓" },
    { value: "vote_count.asc", label: "Vote Count ↑" },
    { value: "vote_count.desc", label: "Vote Count ↓" },
  ];

  return (
    <div className="py-4 flex justify-center sm:justify-end">
      <Select
        className="w-60 transition-colors duration-300"
        placeholder="Sort by"
        options={options}
        onChange={handleChange}
        value={searchParams.get("sort") ?? undefined}
        classNames={{
          popup: {
            root: "custom-select-dropdown",
          },
        }}
      />
    </div>
  );
});
