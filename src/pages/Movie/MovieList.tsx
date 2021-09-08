import React, { createRef, RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SearchResult } from 'interfaces/SearchResultInterface';
import { Layout } from 'components/Layout';
import { IMAGE_URL } from 'constant';
import useViewport from 'hooks/useViewport';
import useParallaxScroll from 'hooks/useParallaxScroll';
import background_1 from 'images/background1.jpg';
import background_2 from 'images/background2.jpg';
import background_3 from 'images/background3.jpeg';
import default_background from 'images/test.jpeg';
import { BackgroundContext } from 'contexts/BackgroundContext';

interface IMovieListProps {
  movies: Array<SearchResult>;
}

export const MovieList: React.FC<IMovieListProps> = ({ movies }): JSX.Element => {
  const { setBackground } = useContext(BackgroundContext)
  const { width } = useViewport();
  const { offsetY } = useParallaxScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fixedPosition, setFixedPosition] = useState(false);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0 as number);
  const [nextMovieIndex, setNextMovieIndex] = useState(currentMovieIndex + 1);
  const arrLength = movies.length;

  const elRefs = useRef<Array<RefObject<HTMLDivElement>>>([]);

  const [y, setY] = useState(window.scrollY);

  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    elRefs.current = Array(arrLength)
      .fill(undefined)
      .map((_, i) => elRefs.current[i] || createRef());
  }

  useEffect(() => {
    if (scrollRef.current != null) {
      if (offsetY >= scrollRef.current.offsetTop - width * 0.2) {
        setFixedPosition(true);
      } else {
        setFixedPosition(false);
      }
    }
  });

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // Scroll up
        if (
          currentMovieIndex > 0 &&
          offsetY <= elRefs.current[currentMovieIndex].current!.offsetTop - width * 0.2
        ) {
          setCurrentMovieIndex((prev) => prev - 1);
          setNextMovieIndex((prev) => prev - 1);
        }
      } else if (y < window.scrollY) {
        // Scroll down
        if (
          nextMovieIndex < arrLength - 1 &&
          offsetY >= elRefs.current[currentMovieIndex].current!.offsetTop - width * 0.2 &&
          offsetY <= elRefs.current[nextMovieIndex].current!.offsetTop
        ) {
          setCurrentMovieIndex((prev) => prev + 1);
          setNextMovieIndex((prev) => prev + 1);
        }
      }
      setY(window.scrollY);
    },
    [y],
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    switch (currentMovieIndex) {
        case 0:
        setBackground(background_1)
        break;
        case 1:
        setBackground(background_2)
        break;
      default:
        setBackground(default_background)
        break;
    }
  }, [currentMovieIndex])

  const moviesComponent = movies.map((movie, i) => {
    return (
      <div key={movie.id} className="my-24" ref={elRefs.current[i]}>
        <div className="my-3 text-white text-sm">{movie.overview}</div>
        <div className="mb-3 text-white text-4xl font-bold">{movie.original_title}</div>
      </div>
    );
  });

  return (
    <Layout>
      <div className="flex" ref={scrollRef}>
        <div className="mt-32 w-1/5 h-full">
          {fixedPosition ? (
            <div className="w-30 fixed z-20 left-custom-x-pgnumber top-1/2">
              {currentMovieIndex + 1} / {arrLength}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              {currentMovieIndex + 1} / {arrLength}
            </div>
          )}
        </div>
        <div className="w-2/5">
          <div className="flex flex-col w-full">{moviesComponent}</div>
        </div>
        <div className="flex items-start justify-center mt-24 w-2/5">
          {fixedPosition ? (
            <div className="w-30 fixed z-20 right-custom-x-image top-1/2">
              <img src={IMAGE_URL + movies[currentMovieIndex].poster_path} />
            </div>
          ) : (
            <div>
              <img src={IMAGE_URL + movies[currentMovieIndex].poster_path} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
