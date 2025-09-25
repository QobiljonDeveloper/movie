import { memo } from "react";
import { Select } from "antd";
import { useSearchParams } from "react-router-dom";

export const decades = [
  { label: "1840s", value: { gte: "1840-01-01", lte: "1849-12-31" } },
  { label: "1850s", value: { gte: "1850-01-01", lte: "1859-12-31" } },
  { label: "1860s", value: { gte: "1860-01-01", lte: "1869-12-31" } },
  { label: "1870s", value: { gte: "1870-01-01", lte: "1879-12-31" } },
  { label: "1880s", value: { gte: "1880-01-01", lte: "1889-12-31" } },
  { label: "1890s", value: { gte: "1890-01-01", lte: "1899-12-31" } },
  { label: "1900s", value: { gte: "1900-01-01", lte: "1909-12-31" } },
  { label: "1910s", value: { gte: "1910-01-01", lte: "1919-12-31" } },
  { label: "1920s", value: { gte: "1920-01-01", lte: "1929-12-31" } },
  { label: "1930s", value: { gte: "1930-01-01", lte: "1939-12-31" } },
  { label: "1940s", value: { gte: "1940-01-01", lte: "1949-12-31" } },
  { label: "1950s", value: { gte: "1950-01-01", lte: "1959-12-31" } },
  { label: "1960s", value: { gte: "1960-01-01", lte: "1969-12-31" } },
  { label: "1970s", value: { gte: "1970-01-01", lte: "1979-12-31" } },
  { label: "1980s", value: { gte: "1980-01-01", lte: "1989-12-31" } },
  { label: "1990s", value: { gte: "1990-01-01", lte: "1999-12-31" } },
  { label: "2000s", value: { gte: "2000-01-01", lte: "2009-12-31" } },
  { label: "2010s", value: { gte: "2010-01-01", lte: "2019-12-31" } },
  { label: "2020s", value: { gte: "2020-01-01", lte: "2029-12-31" } },
];

export const MovieDateFilter = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (val: string) => {
    const decade = decades.find((d) => d.label === val);
    if (decade) {
      searchParams.set("gte", decade.value.gte);
      searchParams.set("lte", decade.value.lte);
      setSearchParams(searchParams);
    }
  };

  return (
    <Select
      placeholder="Select Decade"
      options={decades.map((d) => ({ label: d.label, value: d.label }))}
      onChange={handleChange}
      className="w-40"
    />
  );
});
