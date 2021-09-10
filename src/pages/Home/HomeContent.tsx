import React, { FocusEventHandler, useState } from 'react';
import { textConfig } from './config';
import { Searchbar } from 'components/SearchBar';
import { Layout } from './components/Layout';
import SpinnerImg from 'images/loading.png';

interface IHomeContentProps {
  handleFocus: FocusEventHandler<HTMLInputElement>;
  searchCallBack: (value: string) => void;
  error: boolean;
  isReloading: boolean;
}

export const HomeContent: React.FC<IHomeContentProps> = ({
  handleFocus,
  searchCallBack,
  error,
  isReloading,
}): JSX.Element => {
  const { flowTitle, mainTitle, subTitle } = textConfig;
  const flowTitleUpperCase = flowTitle.toUpperCase();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Layout>
        <div className="my-6 text-center text-white text-sm">{flowTitleUpperCase}</div>
        <div className="my-6 text-center text-white text-4xl">{mainTitle}</div>
        <div className="my-6 text-center text-white text-base font-thin">{subTitle}</div>
        <Searchbar searchCallBack={searchCallBack} handleFocus={handleFocus} />
        {isReloading ? (
          <div className="my-6 text-center text-white">Searching for the movies...</div>
        ) : null}
        {!isReloading && error ? (
          <div className="my-6 text-center text-white">
            Sorry, we could not find any matched movies.
          </div>
        ) : null}
      </Layout>
    </div>
  );
};
