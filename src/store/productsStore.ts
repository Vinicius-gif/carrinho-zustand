/* eslint-disable no-unused-vars */
// productsStore.ts

import { Product } from '@/types/Product';
import {create} from 'zustand';

export interface CartProduct {
  product: Product;
  quantity: number;
}
interface ProductsStore {
  products: Product[];
  cart: CartProduct[];
  isCartVisible: boolean;
  setIsCartVisible: (value: boolean) => void;
  addNewProducts: (newProducts: Product[]) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
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
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === productId);

      if (existingItem) {
        // If item already exists, increment quantity
        return {
          cart: state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If item doesn't exist, add a new item
        return {
          cart: [...state.cart, { product: state.products.find((p) => p.id === productId)!, quantity: 1 }],
        };
      }
    });
  },
  removeFromCart: (productId: string) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
  },
  updateQuantity: (productId: string, newQuantity: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      ),
    }));
  },
}));

export default useProductsStore;
