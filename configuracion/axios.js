import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/',   
    headers: {
      'Content-Type': 'application/json'
    }
    
});

export default  clienteAxios;