import axios from "axios";
import { Server_API } from "../configs";
import { product } from "../types";


const EditProductApi = async (params:product) => {
    console.log(params)
  const name = params.name
  const description=params.description
  const image =params.image
  try {
    const response = await axios.put(`${Server_API}/product/${params.id}`, {
        name,description,image,brandId:params.brandId,price:params.price
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
   );
   console.log(response)
    return response.data;  
  } catch (error) {
    console.log(error)
  }
};


export default EditProductApi;