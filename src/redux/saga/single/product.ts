import { call, put } from "@redux-saga/core/effects";
import getProductApi from "../../../api/getProduct.api";
import { getProductResponse } from "../../action/Product.action";

export function* getProduct() {
  const product = yield call(getProductApi);
  console.log(product)
  const obj = {};
  product.forEach((element, index) => {
    obj[index] = {
      title: element.title,
      description: element.description,
      image: element.image
    };
  });
  yield put(getProductResponse(product));
}
