import axios from "axios"
import  {register}  from "../constant";

export const createUser = (body) => {
    return axios.post(register, body).then(result => result);
  }

  export const userLogin = (body) => {
    return axios.post(`${register}/login-user`, body).then(result => result);
  }