import { call, put } from "@redux-saga/core/effects";
import getDiscountApi from "../../../api/getDiscount";
import { getDiscountDataResponse } from "../../action/discount.action";


export function* getDiscount() {
  const discount = yield call(getDiscountApi);
  console.log(discount)
  yield put(getDiscountDataResponse(discount));
}
