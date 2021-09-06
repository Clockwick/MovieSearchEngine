import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ContextType {
  width: number;
  height: number;
  offsetY: number;
}

export const WindowContext: React.Context<ContextType> = createContext({} as ContextType);

export const WindowProvider: React.FC = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value = useMemo(
    () => ({
      width,
      height,
      offsetY,
    }),
    [width, height, offsetY],
  );

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
};
