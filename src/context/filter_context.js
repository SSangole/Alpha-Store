import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../context/productcontext";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = (view) => {
    return dispatch({ type: "SET_GRIDVIEW", payload: view });
  };

  // Clears the filtering values
  const clearFilter = () => {
    return dispatch({ type: "CLEAR_FILTER_VALUES" });
  };

  // Updates the filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // Filters product according to value
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);
  // To get the sorting value
  const sorting = (event) => {
    let userSortValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userSortValue });
  };

  // To sort the products
  useEffect(() => {
    return dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, sorting, updateFilterValue, clearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

// export default filter_context;
