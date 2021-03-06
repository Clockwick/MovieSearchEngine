import React, { FocusEventHandler, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface ISearchProps {
  handleFocus: FocusEventHandler<HTMLInputElement>;
  searchCallBack: (value: string) => void;
}
export const Searchbar: React.FC<ISearchProps> = ({ handleFocus, searchCallBack }): JSX.Element => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCallBack(value);
  };
  return (
    <form
      id="search"
      onSubmit={handleSubmit}
      className="flex items-center my-6 w-4/5 bg-white rounded-full shadow-xl"
    >
      <input
        className="px-6 py-4 w-full text-gray-700 leading-tight rounded-l-full focus:outline-none"
        id="search"
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <div className="p-4">
        <button
          type="submit"
          className="flex items-center justify-center p-2 w-12 h-12 text-white bg-gradient-to-r rounded-full focus:outline-none from-green-400 to-blue-500"
        >
          <FaSearch className="text-white" />
        </button>
      </div>
    </form>
  );
};
