import { GET_PRODUCT_DATA_RESPONSE } from "../constant/types";
import { ProductState, actionType } from "../../types";


const initialState: ProductState = {
  product: {},
  params:[]
};

export default (state: ProductState = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT_DATA_RESPONSE:
      const getProductDataPayload = payload as ProductState;
      return {
        ...state,
        product: [...getProductDataPayload.params],
      };

    default:
      return state;
  }
};