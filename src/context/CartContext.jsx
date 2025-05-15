import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function cartReducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload]; // Adds the product to cart
      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  }

// Stores and updates the cart's data
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
