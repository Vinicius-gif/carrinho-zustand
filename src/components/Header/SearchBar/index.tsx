'use client';

import { getProducts } from '@/api/getProducts';
import useProductsStore from '@/store/productsStore';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const { addNewProducts } = useProductsStore();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProducts = await getProducts({query: searchValue});

    addNewProducts(newProducts);
    
    setSearchValue('');
  };

  return (
    <form 
      action="" 
      className="flex bg-white max-w-md shadow-sm justify-between gap-3 pr-3 xl:w-full lg:w-full md:w-4/5 sm:w-1/2"
      onSubmit={handleSearch}
    > 
      <input
        className="p-3 grow outline-none text-xs font-medium border-r border-gray-300"
        type="search"
        placeholder="Buscar produtos"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className="bg-none border-none text-base flex items-center justify-center text-gray-800s">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
