import { ReactNode, createContext, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => undefined,
});

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product): void {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const cartValue = { cart, addToCart };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
