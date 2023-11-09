import { create } from 'zustand';

interface Item {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
}

interface ItemStore {
  items: Item[];
  addToItems: (items: Item[]) => void;
}

export const useProdutosStore = create<ItemStore>((set) => ({
  items: [],
  addToItems: (items) => set({ items })
}));

interface CartItem {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
  quantity: number;
}

interface CartStoreActions {
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
}
interface CartStoreProps {
  state: {
    cartItems: CartItem[];
  },
  actions: CartStoreActions;
}

export const useCartStore = create<CartStoreProps>((set) => ({
  state: {
    cartItems: []
  },
  actions: {
    addToCart: (item) =>
      set((state) => ({
        state: { cartItems: [...state.state.cartItems, { ...item, quantity: 1 }] } 
      })),

    removeFromCart: (itemId) =>
      set((state) => ({
        state: { cartItems: state.state.cartItems.filter((item) => item.id !== itemId) } 
      })),

    increaseQuantity: (itemId) =>
      set((state) => ({
        state : {cartItems: state.state.cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ), }
      })),

    decreaseQuantity: (itemId) =>
      set((state) => ({
        state: { cartItems: state.state.cartItems.map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),}
      }))
  }
}));
