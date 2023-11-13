/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import Link from 'next/link';

const Header = () => {

  return (
    <header className="bg-sky-500 h-16 w-full flex items-center fixed z-10">
      <div className="flex items-center justify-around w-4/5">
        <Link href="/">
          <h2 className="font-bold text-4xl text-white">Logo</h2>
        </Link>
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
};

export default Header;
