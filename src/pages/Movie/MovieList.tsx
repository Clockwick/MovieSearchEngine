import React, { useEffect, useRef, useState } from 'react';
import { SearchResult } from 'interfaces/SearchResultInterface';
import { Layout } from 'components/Layout';
import { IMAGE_URL } from 'constant';
import useViewport from 'hooks/useViewport';
import useParallaxScroll from 'hooks/useParallaxScroll';

interface IMovieListProps {
  movies: Array<SearchResult>;
}

export const MovieList: React.FC<IMovieListProps> = ({ movies }): JSX.Element => {
    const {width} = useViewport()
    const {offsetY} = useParallaxScroll()
    const scrollRef = useRef<any>(null)
    const [fixedPosition, setFixedPosition] = useState(false)

  const moviesComponent = movies.map((movie) => {
      const movieImg = IMAGE_URL + movie.poster_path

      useEffect(() => {
        if (offsetY >= scrollRef.current.offsetTop - width * 0.2) {
            setFixedPosition(true)
        } 
        else {
            setFixedPosition(false)
        }
      })

    return (
            <div key={movie.id}>
                <div className="my-3 text-sm text-white">{movie.overview}</div>
                <div className="mb-3 font-bold text-4xl text-white">{movie.original_title}</div>
            </div>
    );
  });

  return (
    <Layout>
        <div className="flex relative bg-blue-500" ref={scrollRef}>
            <div className="mt-10 h-full w-1/5 relative bg-red-400">
                {fixedPosition ? <div className="fixed top-1/2 left-0 w-30 text-white z-20" >01 / 08</div> : <div className="h-full flex justify-center items-center text-white" >01 / 08</div>}
                
            </div>
            <div className="w-2/5">
                <div className="flex flex-col w-full">
                    {moviesComponent}
                </div>
            </div>
        </div>
    </Layout>
      );
};
