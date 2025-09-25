import { memo } from "react";
import { Select } from "antd";
import { useSearchParams } from "react-router-dom";

export const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const MovieGenreFilter = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selected = searchParams.get("with_genres")?.split(",") || [];

  const handleChange = (values: string[]) => {
    if (values.length) {
      searchParams.set("with_genres", values.join(","));
    } else {
      searchParams.delete("with_genres");
    }
    setSearchParams(searchParams);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Select genres"
      value={selected}
      onChange={handleChange}
      options={genres.map((g) => ({ label: g.name, value: String(g.id) }))}
      className="w-60"
    />
  );
});
