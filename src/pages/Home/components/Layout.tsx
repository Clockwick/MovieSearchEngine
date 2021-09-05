import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center mb-40 px-6 py-4">{children}</div>
  );
};
