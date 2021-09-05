import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Background } from 'components/Background';
import { HomeContent } from './HomeContent';
import ImageAnimation from './components/ImageAnimation';

// https://source.unsplash.com/random/1024x768
// https://source.unsplash.com/random/1920x1080

export const Home: React.FC = (props): JSX.Element => {
    const [isFocus, setIsFocus] = useState(false)
    const handleFocus = () => {
        setIsFocus((focus) => true)
    }
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {isFocus ? <ImageAnimation/> : null}
      <Background />
      <HomeContent handleFocus={handleFocus}/>
    </div>
  );
};
