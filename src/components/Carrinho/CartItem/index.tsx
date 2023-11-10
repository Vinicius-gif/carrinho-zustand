/* eslint-disable @next/next/no-img-element */
import useProductsStore from '@/store/productsStore';
import { Product } from '@/types/product';
import formatCurrency from '@/utils/formatCurrency';
import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';

const CartItem = ({ id, title, price, thumbnail}: Product) => {

  const { removeFromCart } = useProductsStore();

  const priceCurrency = formatCurrency({value: price});

  return (
    <section className="flex items-start border-b border-gray-400 pb-5 mb-5 relative">
      <img src={thumbnail} alt="thumbnail" className="w-16"/>
      <div className="pt-0 pr-9 pb-0 pl-3">
        <h3 className="text-sm font-medium text-black mb-2">{title}</h3>
        <h3 className="text-2xl font-medium">{priceCurrency}</h3>

        <button
          type="button"
          className="absolute top-0 right-0 text-red-500 text-2xl border-none bg-none cursor-pointer"
          onClick={() => removeFromCart(id) }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
