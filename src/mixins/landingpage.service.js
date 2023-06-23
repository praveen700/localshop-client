import axios from "axios"
import  {url}  from "../constant";

export const getLandingPageDetails = () => {
    return axios.get(url).then(result => result);
  }