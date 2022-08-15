import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://directorioseguridad.dte.gt/api/',   
      
});

export default  clienteAxios;