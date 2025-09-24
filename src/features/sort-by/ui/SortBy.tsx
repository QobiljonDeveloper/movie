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
    { value: "first_air_date.asc", label: "First Air Date ↑" },
    { value: "first_air_date.desc", label: "First Air Date ↓" },
    { value: "name.asc", label: "Name ↑" },
    { value: "name.desc", label: "Name ↓" },
    { value: "original_name.asc", label: "Original Name ↑" },
    { value: "original_name.desc", label: "Original Name ↓" },
    { value: "popularity.asc", label: "Popularity ↑" },
    { value: "popularity.desc", label: "Popularity ↓" },
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
