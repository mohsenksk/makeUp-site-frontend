import { LoginTypes } from "../types/index.ts";
import axios from "axios";
import  {Server_API}  from "../configs/index.ts";



const SignUp = async (param:LoginTypes) => {
  console.log(param)
  const response = await axios.post(`${Server_API}/`, {
    /*name:param.name,
    email:param.email,
    //phoneNumber: param.phoneNumber,
    password: param.password,
    confirmPass:param.confirmPass,*/
    header: {
      "Content-Type": "application/json",
    },
    mode: 'cors',
    body:JSON.stringify(param)
  });

  return response.data;
};

export default SignUp;
