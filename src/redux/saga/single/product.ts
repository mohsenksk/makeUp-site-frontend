import { call, put } from "@redux-saga/core/effects";
import getProductApi from "../../../api/getProduct.api";
import { getProductResponse } from "../../action/Product.action";

export function* getProduct(): any  {
  const product = yield call(getProductApi);
  const obj: { [key: number]: { title: string, description: string, image: string } } = {};
  product.data.forEach((element: any, index: any) => {
    obj[index] = {
      title: element.name,
      description: element.description,
      image: element.image
    };
  });
  yield put(getProductResponse(product.data));
}
