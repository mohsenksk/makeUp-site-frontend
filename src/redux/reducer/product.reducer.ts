import { GET_PRODUCT_DATA_RESPONSE } from "../constant/types";

const initialState = {
  product: {},
};

export default (state = initialState, action = {}) => {
  const { payload, type }:any = action;
  switch (type) {
    case GET_PRODUCT_DATA_RESPONSE:
      return {
        ...state,
        product: [ ...payload.params ],
      };

    default:
      return state;
  }
};