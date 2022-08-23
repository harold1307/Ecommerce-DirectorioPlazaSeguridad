import {
    CARGANDO_COMPANIA_INICIO,
    CARGANDO_COMPANIA_EXITO ,
    CARGANDO_COMPANIA_ERROR
    } from '../types/typeCompanyIdActionGet.jsx';
import clienteAxios from '../../configuracion/axios';

export function cargarCompaniaId(companiaId) {
    return async (dispatch) => {
        dispatch( cargarCompaniaId_Inicio() );    
        try {               
            const compania = await clienteAxios.get(`/companies/${companiaId}`);                   
           dispatch( cargarCompaniaId_Exito(compania.data) ); 
        } catch (error) {             
            dispatch( cargarCompaniaId_Error(error) );        
        }
    }
}
const cargarCompaniaId_Inicio = () => ({
    type: CARGANDO_COMPANIA_INICIO,
    payload: {
        companias   : [],
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
        companias : [],
        loading: false,
        error: error.code
    }
    
});    