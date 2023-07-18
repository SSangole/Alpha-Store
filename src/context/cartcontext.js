import { createContext, useReducer, useContext, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";

const cartContext = createContext();
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("alphaCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};
const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fees: 5000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const removeItems = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Local storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE_ITEM" });
    localStorage.setItem("alphaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItems,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
