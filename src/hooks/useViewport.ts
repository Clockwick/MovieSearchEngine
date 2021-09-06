import { WindowContext } from './../contexts/WindowContext';
import { useContext } from 'react';

type ViewportProps = {
  width: number;
  height: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const useViewport = (): ViewportProps => {
  const sm = 640;
  const md = 768;
  const lg = 1024;
  const xl = 1280;
  const { width, height } = useContext(WindowContext);

  return { width, height, sm, md, lg, xl };
};

export default useViewport;
