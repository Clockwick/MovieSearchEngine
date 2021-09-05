import React, { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Background } from 'components/Background';
import { HomeContent } from './HomeContent';
import ImageAnimation from './components/ImageAnimation';
import MOVIE_API_URL from 'constant';

// https://source.unsplash.com/random/1024x768
// https://source.unsplash.com/random/1920x1080

export const Home: React.FC = (props): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus((focus) => true);
  };

  const searchCallBack = async (value: string) => {
    const requestURL = MOVIE_API_URL + `&query=${encodeURI(value)}`;
    fetch(requestURL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Response back : ', res);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {isFocus ? <ImageAnimation /> : null}
      <Background />
      <HomeContent searchCallBack={searchCallBack} handleFocus={handleFocus} />
    </div>
  );
};
