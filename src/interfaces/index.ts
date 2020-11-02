// Components
export interface INavProps {}
export interface IHomeProps {}

export interface IMovieProps {
  movie: IMovie;
}

// Others
export interface IStyles {
  readonly [key: string]: string;
}

export interface IUseHomeProps {
  state: IState;
  handleClick: () => void;
  showMovies: (movie: IMovie) => JSX.Element;
}

// Routes
export interface IRouterProps {}

// Store
export interface IState {
  movies: IMovie[];
  filtered: IMovie[];
  filter: string;
  page: number;
  total: number;
}

export interface IProviderProps {
  children: React.ReactNode;
}

// API
export interface IResponse {
  config: Object;
  data: IData;
  headers: Object;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export interface IResultData {
  page: number;
  total: number;
  movies: IMovie[];
}

export interface IData {
  average_rating: number;
  backdrop_path: string;
  comments: Object;
  created_by: ICreatedBy;
  description: string;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  object_ids: IObjectId;
  page: number;
  poster_path: string;
  public: boolean;
  results: IMovie[];
  revenue: number;
  runtime: number;
  sort_by: string;
  total_pages: number;
  total_results: number;
}

export interface ICreatedBy {
  gravatar_hash: string;
  id: string;
  name: string;
  username: string;
}

export interface IObjectId {
  [key: string]: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
