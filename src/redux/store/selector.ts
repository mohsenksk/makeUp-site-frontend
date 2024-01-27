import { get } from "lodash/fp";

//General
// export const selectorPublicData = get(["general", "publicData"]);
export const selectorUserData = get(["user", "userData"]);
export const selectorPublicData = get(["publicData", "publicData"]);
export const selectorBrand =get (["brandReducer","brand"])
export const selectorProduct =get (["productReducer","product"])
export const selectorDiscount =get (["discountReducer","discount"])
