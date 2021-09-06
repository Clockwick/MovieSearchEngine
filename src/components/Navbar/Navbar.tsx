import React from 'react';
import config from './config';
export const Navbar: React.FC = (): JSX.Element => {
  const links = config.map((item) => {
    const { id, name, href, icon } = item;
    return (
      <a key={id} href={href} className="flex items-center justify-between mx-8">
        <div className="mx-2 text-white text-xl">{name}</div>
        {icon}
      </a>
    );
  });
  return (
    <nav className="fixed bg-gray-800 bg-opacity-50">
      <div className="mx-auto px-2 w-screen">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-stretch justify-start ml-16">
            <div className="text-white text-2xl font-bold">Movie Search Engine</div>
          </div>
          <div className="flex items-stretch justify-end mr-16">{links}</div>
        </div>
      </div>
    </nav>
  );
};
