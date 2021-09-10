import React, { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from 'contexts/BackgroundContext';
import './Background.css';

export const Background: React.FC = (): JSX.Element => {
  const { background } = useContext(BackgroundContext);

  const [currentBackground, setCurrentBackground] = useState(background);

  useEffect(() => {
    setCurrentBackground(background);
  }, [background]);

  useEffect(() => {
    const imageElement = document.getElementById('background-image')!;
    imageElement.classList.add('background-image');
    imageElement.addEventListener('animationend', () => {
      imageElement.classList.remove('background-image');
    });
  }, [currentBackground]);

  return (
    <div className="fixed -z-10 inset-0">
      <img src={currentBackground} alt="Background" id="background-image" />
    </div>
  );
};
