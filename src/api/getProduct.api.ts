import axios from "axios";
import { Server_API } from "../configs";



const getProductApi = async () => {
  try {
    const response = await axios.get(`${Server_API}/product/get`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
   );
    return response.data;  
  } catch (error) {
    console.log(error)
  }
};


export default getProductApi;