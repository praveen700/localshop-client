import axios from "axios"
import  {electUrl, fashionUrl, productUrl}  from "../constant";

export const getElectronicsDetails = (parameter) => {
    return axios.get(`${electUrl}?categoryType=${parameter}`).then(result => result);
  }

  export const getFashionDetails = () => {
    return axios.get(fashionUrl).then(result => result);
  }

  export const productSort = (categoryId, type) => {
    return axios.get(`${productUrl}/${categoryId}/sort?sortType=${type}`).then(result => result);
    
  }

  export const productPriceFilter = (payload) => {
    return axios.get(`${productUrl}/${payload?.categoryId}/filter-by-price?minPrice=${payload?.minPrice}&maxPrice=${payload?.maxPrice}`).then(result => result);
    
  }
  export const fetchProductByID = (id) => {
    return axios.get(`${productUrl}/${id}`).then(result => result);
    
  }
