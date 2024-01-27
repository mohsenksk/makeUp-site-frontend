import {UPLOAD_REQUEST} from "../constant/types";

export const uploadRequest = (params:any) => ({
    type: UPLOAD_REQUEST,
    payload: { params }
  })