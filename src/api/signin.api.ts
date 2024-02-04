import { LoginTypes } from "../types/index.ts";
import axios from "axios";
import  {Server_API}  from "../configs/index.ts";



const SignIn = async (param:LoginTypes) => {
  console.log(param)
  const response = await axios.post(`${Server_API}/auth/sign-in`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: 'cors',
    body:JSON.stringify(param)
  });

  return response.data;
};

export default SignIn;