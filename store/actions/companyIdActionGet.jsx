import {
    CARGANDO_COMPANIA_INICIO,
    CARGANDO_COMPANIA_EXITO ,
    CARGANDO_COMPANIA_ERROR
    } from '../types/typeCompanyIdActionGet.jsx';
import clienteAxios from '../../configuracion/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function cargarCompaniaId(companiaId) {
    return async (dispatch) => {
        dispatch( cargarCompaniaId_Inicio() );   
        toast.info('Cargando', {
            position: "bottom-center",
            theme: "light",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });   
        try {               
            const compania = await clienteAxios.get(`/companies/${companiaId}`);                   
           dispatch( cargarCompaniaId_Exito(compania.data) ); 
        } catch (error) {                         
            dispatch( cargarCompaniaId_Error(error) );    
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
        }
    }
}
const cargarCompaniaId_Inicio = () => ({
    type: CARGANDO_COMPANIA_INICIO,
    payload: {
        compania   : [],
        loading: false,
        error: false
    }
});
const cargarCompaniaId_Exito = (compania) => ({
    type: CARGANDO_COMPANIA_EXITO,
     payload: {
        compania : compania,
        loading: true,
        error: false
    }
});
const cargarCompaniaId_Error = (error) => ({
    type: CARGANDO_COMPANIA_ERROR,
    payload: {
        compania : [],
        loading: false,
        error: error.code
    }
    
});    