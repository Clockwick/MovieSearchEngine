import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';

const config = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    icon: <FaHome className="text-white" />,
  },
  {
    id: 2,
    name: 'Search',
    href: '#search',
    icon: <FaSearch className="text-white" />,
  },
];

export default config;
