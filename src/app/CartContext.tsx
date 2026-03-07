// src/app/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/mockData';

export interface CartItem extends Product {
  cartQuantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + quantity }
            : item
        );
      }
      
      return [...currentItems, { ...product, cartQuantity: quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = items.reduce((sum, item) => sum + (item.pricePerUnit * item.cartQuantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
