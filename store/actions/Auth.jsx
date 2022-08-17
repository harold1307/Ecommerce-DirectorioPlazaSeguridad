import {
    AUTH_INICIO,
    AUTH_EXITO ,
    AUTH_ERROR,
    AUTH_CERRAR
    } from '../types/typesAuth';
import clienteAxios from '../../configuracion/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export function verificarUsuario(credencialesUsuario ) {

    function postUserAccount() {
        return axios.post('https://directorioseguridad.dte.gt/api/login', credencialesUsuario);
      }
      
      function getUserPermissions() {
        return axios.get('https://directorioseguridad.dte.gt/api/login/success'); 
      }


    return  (dispatch) => {       
           dispatch( verificarUsuario_Inicio() );        
           toast.info('Verificando credenciales', {
            position: "bottom-center",
            theme: "light",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });       
                         
          Promise.all([getUserAccount(), getUserPermissions()])
            .then(function (results) {
              const acct = results[0];
              const perm = results[1];
              console.log('acct: ', ' =>  ', acct)
              console.log('perm: ', ' =>  ', perm)
              console.log('results: ', ' =>  ', results)
              dispatch( verificarUsuario_Exito( perm ) ); 
              toast.success('Iniciando sesión', {
                position: "bottom-center",
                theme: "light",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '' ,
                });  

            }) .catch(function (error) {
                dispatch( verificarUsuario_Error(error) );             
                toast.error('Upp, parece que hubo un error', {
                    position: "bottom-center",
                    theme: "light",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: ''
                    }); 
              })











        }   
           

}

export function cerrarSesion() {
    return async (dispatch) => {       
        dispatch( cerrarSesion_Inicio() );  
       
           toast.info('Cerrando sesion', {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });             
    }
}

const verificarUsuario_Inicio = () => ({
    type: AUTH_INICIO,
    payload: {
        dataUser  : [],
        loading: false,
        error: false
    }
});
const verificarUsuario_Exito = ( dataUser ) => ({
    type: AUTH_EXITO,
     payload: {
        dataUser  : dataUser,
        loading: true,
        error: false
    }
});

const verificarUsuario_Error = (error) => ({
    type: AUTH_ERROR,
     payload: {
        dataUser  : [],
        loading: true,
        error: error.message
    }
});

const cerrarSesion_Inicio= (error) => ({
    type: AUTH_CERRAR,
    payload: {
        dataUser : [],
        loading: false     
    }
    
});   