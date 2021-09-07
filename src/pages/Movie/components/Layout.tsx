import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className="flex flex-col w-screen">{children}</div>;
};

export default Layout;
