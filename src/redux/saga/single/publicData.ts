import { call, put } from "@redux-saga/core/effects";

import publicDataApi from "../../../api/publicData.api";
import { getPublicDataResponse } from "../../action/publicData.action";


export function* getPublicData() {
  const publicData = yield call(publicDataApi);

  const obj = {};
  publicData.forEach((element) => {
    obj[element.key] = {
      ...obj[element.key],//change 
      [element.lang]: element.value.includes("{")
        ? JSON.parse(element.value)
        : element.value,
    };
  });
  yield put(getPublicDataResponse(obj));
}
