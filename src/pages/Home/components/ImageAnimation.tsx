import React from 'react';
import { glassesConfig, popcornConfig } from '../config';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import popcornImg from 'images/popcorn.png';
import _3dglassesImg from 'images/3dglasses.png';

const ImageAnimation: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(
    scrollY,
    [0, popcornConfig.animate.y + 300],
    [popcornConfig.animate.x, popcornConfig.animate.y - 300],
  );
  const y2 = useTransform(
    scrollY,
    [100, popcornConfig.animate.y + 300],
    [glassesConfig.animate.y, glassesConfig.animate.y - 500],
  );

  return (
    <>
      <motion.img
        className="absolute"
        initial={popcornConfig.initial}
        animate={popcornConfig.animate}
        transition={popcornConfig.transition}
        src={popcornImg}
        alt={popcornConfig.alt}
        width={popcornConfig.width}
        style={{ y: y1 }}
      />
      <motion.img
        className="absolute"
        initial={glassesConfig.initial}
        animate={glassesConfig.animate}
        transition={glassesConfig.transition}
        src={_3dglassesImg}
        alt={glassesConfig.alt}
        width={glassesConfig.width}
        style={{ y: y2 }}
      />
    </>
  );
};

export default ImageAnimation;
