'use client';

import { getProducts } from '@/api/getProducts';
import React, {useState, useEffect} from 'react';

export default function Home() {

  type Product = {
    id: string;
    title: string;
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({query: 'iphone'}).then((response) => {
      setProducts(response);
    });
  }, [setProducts]);

  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </main>
  );
}
