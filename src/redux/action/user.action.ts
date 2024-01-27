import { GET_USER_DATA_RESPONSE } from "../constant/types";

export const getUserDataResponse = (params:any) => ({
  type: GET_USER_DATA_RESPONSE,
  payload: { params },
});
