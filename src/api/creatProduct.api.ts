import axios from "axios";

import { Server_API } from "../configs";

import { product } from "../types";

const creatProductApi = async (params:any) => {

  try {
    console.log(params)
    const response = await axios.post(`${Server_API}/product/postProduct`,params);
   console.log(response)
    return response.data;  
  } catch (error) {
    console.log(error)
  }
};


export default creatProductApi;