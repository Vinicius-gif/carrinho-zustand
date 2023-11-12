/* eslint-disable @next/next/no-img-element */
import useProductsStore, { CartProduct } from '@/store/productsStore';
import formatCurrency from '@/utils/formatCurrency';
import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';

const CartItem = ({ product: { id, title, price, thumbnail }, quantity }: CartProduct) => {
  const { removeFromCart, updateQuantity } = useProductsStore();

  if (quantity === 0) {
    removeFromCart(id);
  }

  const priceCurrency = formatCurrency({ value: price });
  const totalItemPrice = formatCurrency({ value: price * quantity });

  return (
    <section className="grid grid-cols-2 grid-rows-3 border-b border-gray-700 pb-0.5 mb-1">
      <div className="col-span-2 row-span-1 flex items-center">
        <img src={thumbnail} alt="thumbnail" className="w-full h-24 object-cover rounded" />
        <div className="ml-2">
          <h3 className="text-sm font-medium text-black">{title}</h3>
        </div>
      </div>

      <div className="col-span-2 row-span-1 flex justify-around items-center h-10 mt-2">
        <div>
          <h3 className="text-lg font-medium">{priceCurrency}</h3>
        </div>
        <button
          type="button"
          className="text-red-500 text-lg bg-none cursor-pointer"
          onClick={() => removeFromCart(id)}
        >
          <BsCartDashFill className="w-6 h-6" />
        </button>
      </div>

      <div className="col-span-2 row-span-1 flex items-center justify-around h-10">
        <div className="flex items-center">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="border border-gray-300 px-1 py-1 mr-1 text-sm rounded"
          >
            -
          </button>
          <p className="text-md font-medium">{quantity}</p>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="border border-gray-300 px-1 py-1 ml-1 text-sm rounded"
          >
            +
          </button>
        </div>
        <h4 className="text-md font-medium">Total: {totalItemPrice}</h4>
      </div>
    </section>
  );
};

export default CartItem;
