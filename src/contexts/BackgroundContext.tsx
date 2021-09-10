import React, { createContext, PropsWithChildren, ReactNode, useState } from 'react';

interface ContextType {
  background: string;
  setBackground: (background: string) => void;
}
import defaultBackground from 'images/test.jpeg';

export const BackgroundContext: React.Context<ContextType> = createContext({} as ContextType);

export const BackgroundProvider: React.FC = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  const [background, setBackground] = useState(defaultBackground);
  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};
