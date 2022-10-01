import Cors from 'cors';
import initMiddleware from '../../middleware/initMiddleware';
import clienteAxios from '../../configuracion/axios';

export default function handler(req, res) {

      var url = 'https://directorioseguridad.dte.gt/api/login';
      var credenciales  ={
        "username": "rce.beteta@gmail.com",
        "password": "12345"
    };
  
    fetch(url, {
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify(credenciales), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


}