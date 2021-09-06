import React from 'react';
import { SearchResult } from 'interfaces/SearchResultInterface';
import { Layout } from 'components/Layout';

interface IMovieListProps {
  movies: Array<SearchResult>;
}
export const MovieList: React.FC<IMovieListProps> = ({ movies }): JSX.Element => {
  const moviesComponent = movies.map((movie) => {
    return (
      <div key={movie.id} className="flex flex-col justify-start p-10 bg-white border-2">
        <div className="my-5 font-bold">{movie.original_title}</div>
        <div className="my-5">{movie.overview}</div>
      </div>
    );
  });
  return <Layout>{moviesComponent}</Layout>;
};
