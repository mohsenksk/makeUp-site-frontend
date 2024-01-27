import { GET_DISCOUNT_DATA_REQUEST ,
    GET_DISCOUNT_DATA_RESPONSE
 } from "../constant/types";

export const getDiscountDataRequest = (params:any) => ({
    type: GET_DISCOUNT_DATA_REQUEST,
    payload: { params },
  });
  
  export const getDiscountDataResponse = (params:any) => ({
    type: GET_DISCOUNT_DATA_RESPONSE,
    payload: { params },
  });