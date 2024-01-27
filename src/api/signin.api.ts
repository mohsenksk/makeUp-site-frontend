import { LoginTypes } from "../types/index.ts";
import axios from "axios";
import  {Server_API}  from "../configs/index.ts";



const SignIn = async (param:LoginTypes) => {
  const response = await axios.get(`${Server_API}/routes/auth/signin`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:5174/",
    },
  });

  return response.data;
};

export default SignIn;