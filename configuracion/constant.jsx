import axios from "axios";

const imgProducts = axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/products/img/product/',   
    headers: {
      'Content-Type': 'application/json'     
    }
    
});

export default  imgProducts;