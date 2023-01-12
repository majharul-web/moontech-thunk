import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    stocks: false,
    brands: [],
  },
  keywords: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter((brand) => brand !== action.payload),
          },
        };
      }

    case TOGGLE_STOCK:
      return {
        ...state,
        filters: { ...state.filters, stocks: !state.filters.stocks },
      };

    default:
      return state;
  }
};
