import { GET_PRODUCT_DATA_REQUEST ,
    GET_PRODUCT_DATA_RESPONSE
 } from "../constant/types";

export const getProductRequest = (params:any) => ({
    type: GET_PRODUCT_DATA_REQUEST,
    payload: { params },
  });
  
  export const getProductResponse = (params:any) => ({
    type: GET_PRODUCT_DATA_RESPONSE,
    payload: { params },
  });