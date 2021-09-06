import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className="flex flex-col ml-20">{children}</div>;
};

export default Layout;
