import React, {
  createRef,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SearchResult, SearchResultBackground } from 'interfaces/SearchResultInterface';
import { Layout } from 'components/Layout';
import useViewport from 'hooks/useViewport';
import useParallaxScroll from 'hooks/useParallaxScroll';
import { BackgroundContext } from 'contexts/BackgroundContext';
import './MovieList.css';

interface IMovieListProps {
  movies: Array<SearchResult>;
  movies_background: Array<SearchResultBackground>;
}

export const MovieList: React.FC<IMovieListProps> = ({
  movies,
  movies_background,
}): JSX.Element => {
  const { setBackground } = useContext(BackgroundContext);
  const { width } = useViewport();
  const { offsetY } = useParallaxScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fixedPosition, setFixedPosition] = useState(false);
  const [prevMovieIndex, setPrevMovieIndex] = useState(-1 as number);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0 as number);
  const [nextMovieIndex, setNextMovieIndex] = useState(currentMovieIndex + 1);
  const arrLength = movies.length;

  const movieRefs = useRef<Array<RefObject<HTMLDivElement>>>([]);

  const [y, setY] = useState(offsetY);

  if (movieRefs.current.length !== arrLength) {
    // add or remove refs
    movieRefs.current = Array(arrLength)
      .fill(undefined)
      .map((_, i) => movieRefs.current[i] || createRef());
  }

  useEffect(() => {
    const imageElement = document.getElementById('movieImage')!;
    imageElement.classList.add('movieImage');
    imageElement.addEventListener('animationend', () => {
      imageElement.classList.remove('movieImage');
    });
  }, [currentMovieIndex]);

  useEffect(() => {
    if (scrollRef.current != null) {
      if (offsetY >= scrollRef.current.offsetTop - width / 5 + 150) {
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
          offsetY <= movieRefs.current[prevMovieIndex].current!.offsetTop - width * 0.2
        ) {
          setPrevMovieIndex((prev) => prev - 1);
          setCurrentMovieIndex((prev) => prev - 1);
          setNextMovieIndex((prev) => prev - 1);
        }
      } else if (y < window.scrollY) {
        // Scroll down
        if (
          nextMovieIndex < arrLength &&
          offsetY >= movieRefs.current[currentMovieIndex].current!.offsetTop + 100 &&
          offsetY <= movieRefs.current[nextMovieIndex].current!.offsetTop
        ) {
          setPrevMovieIndex((prev) => prev + 1);
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
        setBackground(movies_background[0].urls.full);
        break;
      case 1:
        setBackground(movies_background[1].urls.full);
        break;
      case 2:
        setBackground(movies_background[2].urls.full);
        break;
    }
  }, [currentMovieIndex]);

  const moviesComponent = movies.map((movie, i) => {
    if (currentMovieIndex !== i) {
      return (
        <div
          key={movie.id}
          className="flex flex-col justify-center mb-32 h-96 opacity-50 cursor-pointer"
          id="movieList"
        >
          <div className="mb-3 text-white text-4xl font-bold" ref={movieRefs.current[i]}>
            {movie.original_title}
          </div>
          <div className="my-3 text-white text-sm">{movie.overview}</div>
        </div>
      );
    }
    return (
      <div
        key={movie.id}
        className="flex flex-col justify-center mb-32 h-96 cursor-pointer"
        id="movieList"
      >
        <div className="mb-3 text-white text-4xl font-bold" ref={movieRefs.current[i]}>
          {movie.original_title}
        </div>
        <div className="my-3 text-white text-sm">{movie.overview}</div>
      </div>
    );
  });

  return (
    <Layout>
      <div className="flex pb-48" ref={scrollRef}>
        <div className="flex justify-center w-1/5 h-96">
          {fixedPosition ? (
            <div className="w-30 fixed z-20 bottom-1/2">
              {currentMovieIndex + 1} / {arrLength}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              {currentMovieIndex + 1} / {arrLength}
            </div>
          )}
        </div>
        <div className="w-2/5">
          <div className="flex flex-col w-full">{moviesComponent}</div>
        </div>
        <div className="flex items-start justify-center w-2/5 h-full">
          {fixedPosition ? (
            <div className="fixed bottom-1/4">
              <img
                src={process.env.REACT_IMAGE_URL + movies[currentMovieIndex].poster_path}
                width="300"
                className="rounded"
                id="movieImage"
              />
            </div>
          ) : (
            <div>
              <img
                src={process.env.REACT_IMAGE_URL + movies[currentMovieIndex].poster_path}
                width="300"
                className="rounded"
                id="movieImage"
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
