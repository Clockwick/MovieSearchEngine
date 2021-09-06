import { WindowContext } from 'contexts/WindowContext';
import { useContext } from 'react';

const useParallaxScroll = (): {
  offsetY: number;
} => {
  const { offsetY } = useContext(WindowContext);

  return { offsetY };
};

export default useParallaxScroll;
