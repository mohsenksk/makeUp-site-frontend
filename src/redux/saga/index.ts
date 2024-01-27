import { takeLatest } from "redux-saga/effects";
import { EDIT_SLIDESHOW_REQUEST, GET_PRODUCT_DATA_REQUEST, GET_PUBLIC_DATA_REQUEST,UPLOAD_REQUEST } from "../constant/types";
import { editSlideshow } from "./single/editSlideshow";
import { getProduct } from "./single/product";
import { getPublicData } from "./single/publicData";
import { upload } from "./single/upload";



export default function* root() {

  yield takeLatest(GET_PUBLIC_DATA_REQUEST, getPublicData);
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, getProduct);
  //yield takeLatest(GET_DISCOUNT_DATA_REQUEST, getDiscount);
  yield takeLatest(EDIT_SLIDESHOW_REQUEST, editSlideshow);
  yield takeLatest(UPLOAD_REQUEST, upload);

}
