'use client';

import React from 'react';
import CartItem from './CartItem';
import formatCurrency from '@/utils/formatCurrency';
import useProductsStore from '@/store/productsStore';

const Carrinho = () => {

  const { cart, isCartVisible } = useProductsStore();

  const totalPrice = cart.reduce((acc, item) => item.price + acc, 0);
  const priceCurrency = formatCurrency({value: totalPrice});

  return (
    <section className={`w-full max-w-xs bg-white h-screen fixed top-0 right-0 px-5 pt-24 pb-5 flex flex-col
    justify-between transition-all duration-200 ease-linear transform ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="grow overflow-auto border-b-0 last:border-b-0">
        { cart.map((cartItem) => 
          <CartItem
            id={cartItem.id} 
            key={cartItem.id}  
            title={cartItem.title} 
            price={cartItem.price}
            thumbnail={cartItem.thumbnail}
          />
        )}
      </div>
      <div className="text-3xl font-medium pt-9 pb-4 border-t border-gray-400 ">Total: {priceCurrency}</div>
    </section>
  );
};

export default Carrinho;
