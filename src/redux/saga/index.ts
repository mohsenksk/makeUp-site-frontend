import { takeLatest } from "redux-saga/effects";
import { EDIT_SLIDESHOW_REQUEST, GET_PRODUCT_DATA_REQUEST, GET_PUBLIC_DATA_REQUEST,INITIAL_CALL_REQUEST,UPLOAD_REQUEST } from "../constant/types";
import { getProduct } from "./single/product";
import { initialCall } from "./single/initialCall";





export default function* root() {
    yield takeLatest(INITIAL_CALL_REQUEST, initialCall);
 // yield takeLatest(GET_PUBLIC_DATA_REQUEST, getPublicData);
  yield takeLatest(GET_PRODUCT_DATA_REQUEST, getProduct);
  //yield takeLatest(GET_DISCOUNT_DATA_REQUEST, getDiscount);
 // yield takeLatest(EDIT_SLIDESHOW_REQUEST, editSlideshow);
 // yield takeLatest(UPLOAD_REQUEST, upload);

}
