import { GET_USER_DATA_RESPONSE } from "../constant/types";

import { UserState} from "../../types";


const initialState: UserState = {
  userData: {},
  params:[]
};

export default (state: UserState = initialState, action:any) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER_DATA_RESPONSE:
      const getProductDataPayload = payload as UserState;
      return {
        ...state,
        userData: [...getProductDataPayload.params],
      };
    default:
      return state;
  }
};
