import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const addBrands = (payload) => {
  return {
    type: TOGGLE_BRAND,
    payload: payload,
  };
};
export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
