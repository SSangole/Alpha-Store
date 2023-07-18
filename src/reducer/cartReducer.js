const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    let cartProduct;
    let allreadyExisted = state.cart.find(
      (currElem) => currElem.id === id + color
    );

    if (allreadyExisted) {
      const updatedProduct = state.cart.map((currElem) => {
        if (currElem.id === id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) newAmount = currElem.max;
          return {
            ...currElem,
            amount: newAmount,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "CART_TOTAL_PRICE_ITEM") {
    let { total_price, total_items } = state.cart.reduce(
      (acc, currElem) => {
        acc.total_price += currElem.amount * currElem.price;
        acc.total_items += currElem.amount;
        return acc;
      },
      {
        total_items: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_amount: total_price,
      total_item: total_items,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    let updatedCart = state.cart.filter(
      (currElem) => currElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "SET_INCREASE") {
    let updatedCart = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let newValue = currElem.amount + 1;
        if (newValue >= currElem.max) newValue = currElem.max;
        return {
          ...currElem,
          amount: newValue,
        };
      } else {
        return currElem;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "SET_DECREASE") {
    let updatedCart = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        let newValue = currElem.amount - 1;
        if (newValue <= 1) newValue = 1;
        return {
          ...currElem,
          amount: newValue,
        };
      } else {
        return currElem;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default cartReducer;
