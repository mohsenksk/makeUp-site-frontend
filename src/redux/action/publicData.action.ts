import {
  GET_PUBLIC_DATA_REQUEST,
  GET_PUBLIC_DATA_RESPONSE,
  EDIT_SLIDESHOW_REQUEST,
} from "../constant/types";

export const getPublicDataRequest = (params:any) => ({
  type: GET_PUBLIC_DATA_REQUEST,
  payload: { params },
});

export const getPublicDataResponse = (params:any) => ({
  type: GET_PUBLIC_DATA_RESPONSE,
  payload: { params },
});
export const editSlideshowRequest = (params:any) => ({
  type: EDIT_SLIDESHOW_REQUEST,
  payload: { params }
})
export const editSlideshowResponse = (params:any) => ({
  type: EDIT_SLIDESHOW_REQUEST,
  payload: { params }
})