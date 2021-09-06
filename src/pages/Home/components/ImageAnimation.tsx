import React from 'react';
import { glassesConfig, popcornConfig } from '../config';
import { motion } from 'framer-motion';
import popcornImg from 'images/popcorn.png';
import _3dglassesImg from 'images/3dglasses.png';

const ImageAnimation: React.FC = () => {
  return (
    <>
      <motion.img
        className="absolute"
        initial={popcornConfig.initial}
        animate={popcornConfig.animate}
        transition={popcornConfig.transition}
        src={popcornImg}
        alt={popcornConfig.alt}
        width="200"
      />
      <motion.img
        className="absolute"
        initial={glassesConfig.initial}
        animate={glassesConfig.animate}
        transition={glassesConfig.transition}
        src={_3dglassesImg}
        alt={glassesConfig.alt}
        width="150"
      />
    </>
  );
};

export default ImageAnimation;
