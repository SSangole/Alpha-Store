const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: action.payload,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      const sortFunction = (sortType) => {
        switch (sortType) {
          case "lowest":
            return (a, b) => a.price - b.price;
          case "highest":
            return (a, b) => b.price - a.price;
          case "a-z":
            return (a, b) => a.name.localeCompare(b.name);
          case "z-a":
            return (a, b) => b.name.localeCompare(a.name);
          default:
            return state;
        }
      };
      newSortData = tempSortProduct.sort(sortFunction(state.sorting_value));
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS": {
      let {
        all_products,
        filters: { text, category, company, color, price },
      } = state;

      let tempFilterProduct = [...all_products];

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currProd) => {
          return currProd.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currProd) => {
          return currProd.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currProd) => {
          return currProd.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currProd) => {
          return currProd.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((currProd) => {
          return currProd.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    }

    case "CLEAR_FILTER_VALUES": {
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
