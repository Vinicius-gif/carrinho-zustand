'use client';

import Carrinho from '@/components/Carrinho';
import Products from '@/components/Products';
import React from 'react';

export default function Home() {

  return (
    <main>
      <Products/>
      <Carrinho/>
    </main>
  );
}
