import React, { useContext } from 'react';
import { BackgroundContext } from 'contexts/BackgroundContext';

export const Background: React.FC = (): JSX.Element => {
  const {background} = useContext(BackgroundContext)
  return (
    <div className="fixed -z-10 inset-0">
      <img src={background} alt="Background" />
    </div>
  );
};
