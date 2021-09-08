import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return <div className="px-6 py-4 text-white">{children}</div>;
};
