import {
    AUTH_INICIO,
    AUTH_EXITO ,
    AUTH_ERROR,
    AUTH_CERRAR

    } from '../types/typesAuth';
import clienteAxios from '../../configuracion/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function verificarUsuario(credencialesUsuario ) {
    return async (dispatch) => {       
        dispatch( verificarUsuario_Inicio() );        
           toast.info('Verificando credenciales', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
        
        try {     
            
                
           let  data  = await clienteAxios.post('/login',JSON.stringify(credencialesUsuario));                   
           dispatch( verificarUsuario_Exito(data) );   
           console.log('dataUser=', data)       
           toast.success('Iniciando sesión', {
           position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: '' ,
            });

        } catch (error) {
            console.log(error);               
            dispatch( verificarUsuario_Error(error) );             
            toast.error('Upp, parece que hubo un error', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: ''
                }); 
        }
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
const verificarUsuario_Exito = (dataUser) => ({
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