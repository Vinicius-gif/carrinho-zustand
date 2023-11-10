'use client';

import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import useProductsStore from '@/store/productsStore';
import { getProducts } from '@/api/getProducts';

const Products = () => {

  const { products, addNewProducts  } = useProductsStore();

  useEffect( () => {
    getProducts({query: 'iphone'}).then((response) => {
      addNewProducts(response);
    });
  }, [addNewProducts]);

  return (
    <section className="items-center justify-center pt-28 mx-28 mb-14 grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
      ))}
    </section>
  );
};

export default Products;
