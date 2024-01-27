import get from "lodash"
import { ErrorHandler } from "../../../config/errorHandler";
import { call} from "@redux-saga/core/effects";
import UploadApi from "../../../api/Upload.api";



export function* upload(params) {
    params=params.payload
    console.log(params)
    let uploadResponse = yield call(UploadApi,params);
    console.log(uploadResponse)
 };
