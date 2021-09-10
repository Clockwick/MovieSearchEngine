export interface SearchResult {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: Date;
  poster_path: string;
}

export interface SearchResultBackground {
  id: string;
  urls: {
    full: string;
  };
}
