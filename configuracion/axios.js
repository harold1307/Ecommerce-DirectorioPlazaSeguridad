import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/',   
    headers: {
      'Content-Type': 'multipart/form-data'
    }
    
});

export default  clienteAxios;