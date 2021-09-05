import React from 'react';
import image from 'images/test.jpeg';

export const Background: React.FC = (): JSX.Element => {
  return (
    <div className="absolute -z-10 inset-0">
      <img src={image} alt="Background" />
    </div>
  );
};
