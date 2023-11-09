'use client';

import { getProducts } from '@/api/getProducts';
import { useProdutosStore } from '@/store/produtosStore';
import React, { useEffect } from 'react';

export default function Home() {

  const { items, addToItems } = useProdutosStore();

  useEffect( () => {
    getProducts({query: 'iphone'}).then((response) => {
      addToItems(response);
    });
  }, [addToItems, items]);

  return (
    <main>
      {items.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </main>
  );
}
