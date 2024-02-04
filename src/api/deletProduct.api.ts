import axios from "axios";
import { Server_API } from "../configs";
import { product } from "../types";


const deletProductApi = async (params:product) => {
    console.log(params)
  try {
    const response = await axios.delete(`${Server_API}/product/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Authorization':`Bearer ${params.token}`
      },
    }
   );
   console.log(response)
    return response.data;  
  } catch (error) {
    console.log(error)
  }
};


export default deletProductApi;