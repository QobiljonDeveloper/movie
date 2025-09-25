export interface IMovie {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieParams {
  page: string;
  sort_by?: string;
  "primary_release_date.gte"?: string;
  "primary_release_date.lte"?: string;
  with_genres?: string;
}

export interface ICrew {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string; 
  deathday: string | null;
  gender: number; 
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}
