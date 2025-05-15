import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const reducer = (state, action) => {
  // handle ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
