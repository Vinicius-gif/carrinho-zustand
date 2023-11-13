'use client';
/* eslint-disable @next/next/no-img-element */
import useProductsStore from '@/store/productsStore';
import formatCurrency from '@/utils/formatCurrency';
import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { products, addToCart } = useProductsStore();

  // Usando find para obter o item específico com base no ID
  const item = products.find((product) => product.id === params.id);

  return (
    <div className="container mx-auto pt-52">
      {item ? (
        <div>
          <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
          <div className="flex items-center mb-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-48 h-52 object-cover mr-4"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl">{ formatCurrency({value: item.price}) }</p>
              <button
                type="button"
                onClick={() => addToCart(item.id)}
                className="w-20 h-20 my-3 mx-4 text-blue-600
              justify-center border-none text-5xl cursor-pointer group-hover:flex"
              >
                <BsFillCartPlusFill/>
              </button>
            </div>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magni?
            Harum nobis nisi deserunt alias dolor laudantium vitae nostrum ex, accusantium
            deleniti expedita ut voluptas. Sed blanditiis architecto est obcaecati!
          </p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
