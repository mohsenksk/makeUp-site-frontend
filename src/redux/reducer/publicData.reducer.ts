import { GET_PUBLIC_DATA_RESPONSE } from "../constant/types";
import { publlicData} from "../../types";


const initialState: publlicData = {
  publicData: {},
  params:[]
};

export default (state: publlicData = initialState, action: any) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PUBLIC_DATA_RESPONSE:
      const getProductDataPayload = payload as publlicData;
      return {
        ...state,
        userData: [...getProductDataPayload.params],
      };
    default:
      return state;
  }
};