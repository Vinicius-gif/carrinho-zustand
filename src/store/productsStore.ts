/* eslint-disable no-unused-vars */
// productsStore.ts


import { Product } from '@/types/Product';
import {create} from 'zustand';

interface ProductsStore {
  products: Product[];
  cart: Product[];
  isCartVisible: boolean;
  setIsCartVisible: (value: boolean) => void;
  addNewProducts: (newProducts: Product[]) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  cart: [],
  isCartVisible: false,
  setIsCartVisible: (value) => {
    set(() => ({ isCartVisible: value}));
  },
  addNewProducts: (newProducts) => {
    set(() => ({ products: newProducts }));
  },
  addToCart: (productId: string) => {
    set((state) => ({
      cart: [...state.cart, state.products.find((p) => p.id === productId)!],
    }));
  },
  removeFromCart: (productId: string) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },
  incrementQuantity: (productId: string) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item } : item
      ),
    }));
  },
  decrementQuantity: (productId: string) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item } : item
      ),
    }));
  },
}));

export default useProductsStore;
