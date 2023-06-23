import axios from "axios"
import  {register}  from "../constant";



  export const updateCustomer = (body, id) => {
    return axios.put(`${register}/${id}`, body).then(result => result);
  }

  export const getCustomer = (id) => {
    return axios.get(`${register}/${id}`).then(result => result);
  }