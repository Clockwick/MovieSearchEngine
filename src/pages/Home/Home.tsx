import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Background } from 'components/Background';
import { HomeContent } from './HomeContent';
import ImageAnimation from './components/ImageAnimation';
import { MOVIE_API_URL } from 'constant'; // 🤫
import { MovieList } from 'pages/Movie/MovieList';
import { SearchResult } from 'interfaces/SearchResultInterface';
import { useLocation } from 'react-router';

// https://source.unsplash.com/random/1024x768
// https://source.unsplash.com/random/1920x1080

export const Home: React.FC = (): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);
  const [preventLocationLoop, setPreventLocationLoop] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const [movieList, setMovieList] = useState([] as Array<SearchResult>);

  const location = useLocation();

  const handleFocus = () => {
    setIsFocus(() => true);
  };

  const searchCallBack = (value: string): void => {
    const requestURL = MOVIE_API_URL + `&query=${encodeURI(value)}`;
    fetch(requestURL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const results: Array<SearchResult> = response.results;
        const filterResult = results.filter((result, index) => index < 3);
        const currSearchResult: Array<SearchResult> = filterResult.map((result) => {
          const {
            id,
            original_title,
            overview,
            popularity,
            title,
            vote_average,
            vote_count,
            release_date,
            poster_path,
          } = result;
          return {
            id,
            original_title,
            overview,
            popularity,
            title,
            vote_average,
            vote_count,
            release_date,
            poster_path,
          };
        });
        // console.log("Current search result : ", currSearchResult)
        setMovieList(currSearchResult);
        setIsSearchCompleted(true);
      });
  };

  if (location.hash === '#search' && !preventLocationLoop) {
    setPreventLocationLoop(true);
    handleFocus();
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {isFocus ? <ImageAnimation /> : null}
      <Background />
      <HomeContent searchCallBack={searchCallBack} handleFocus={handleFocus} />
      {isSearchCompleted ? <MovieList movies={movieList} /> : null}
    </div>
  );
};
