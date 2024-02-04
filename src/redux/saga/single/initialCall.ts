import { call, put } from "@redux-saga/core/effects";
import { initialCallRequest } from "../../action/initialCall.action";


import { getProduct } from "./product";

export function* initialCall():any {
  yield call(getProduct);

}
