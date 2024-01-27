
import { editSlideshowRequest } from "../../action/publicData.action";
import editPublicDataApi from "../../../api/editPublicData.api"
import { ErrorHandler } from "../../../config/errorHandler";
import { call, put } from "@redux-saga/core/effects";




export function* editSlideshow(params) {
    // params=get(params , 'payload.params');
    params=params.payload
    console.log(params)
    let editSlideshowResponse = yield call(editPublicDataApi,params);
    if (editSlideshowResponse=="done") {
      alert("با موفقیت انجام شد");
      window.location.reload();
    }
   };
