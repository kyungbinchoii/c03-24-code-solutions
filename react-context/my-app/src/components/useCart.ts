import { useContext } from 'react';
import { CartContext, CartValue } from './CartContext';

export function useCart(): CartValue {
  return useContext(CartContext);
}
