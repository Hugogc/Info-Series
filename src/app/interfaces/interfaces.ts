

export interface RespuestaMDB {
  page: number;
  total_results: number;
  total_pages: number;
  results: Serie[];
}

export interface Serie {
  original_name?: string;
  genre_ids?: number[];
  name?: string;
  popularity?: number;
  origin_country?: string[];
  vote_count?: number;
  first_air_date?: string;
  backdrop_path?: string;
  original_language?: string;
  id?: number;
  vote_average?: number;
  overview?: string;
  poster_path?: string;
}


export interface SerieDetalle {
  backdrop_path?: string;
  created_by?: Createdby[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: Lastepisodetoair;
  name?: string;
  next_episode_to_air?: Nextepisodetoair;
  networks?: Network[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Productioncompany[];
  seasons?: Season[];
  status?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Productioncompany {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
}

interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface Nextepisodetoair {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path?: any;
  vote_average: number;
  vote_count: number;
}

interface Lastepisodetoair {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Createdby {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path?: any;
}




export interface RespuestaCredits {
  cast: Cast[];
  crew: Crew[];
  id: number;
}

export interface Crew {
  credit_id: string;
  department: string;
  id: number;
  name: string;
  gender: number;
  job: string;
  profile_path: string;
}

export interface Cast {
  character: string;
  credit_id: string;
  id: number;
  name: string;
  gender: number;
  profile_path: string;
  order: number;
}
