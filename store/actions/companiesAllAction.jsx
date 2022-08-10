import {
    CARGANDO_COMPANIAS_INICIO,
    CARGANDO_COMPANIAS_EXITO ,
    CARGANDO_COMPANIAS_ERROR
    } from '../types/typesCompaniesAll';
import clienteAxios from '../../configuracion/axios';


export function cargarCompaniasAll() {
    return async (dispatch) => {
        dispatch( CompaniasAll_Inicio() );    
        try {               
            const products = await clienteAxios.get('/products');                   
           dispatch( CompaniasAll_Exito(products.data) );  
           

        } catch (error) {
            console.log(error);               
            dispatch( CompaniasAll_Error(error) );        
        }
    }
}

const CompaniasAll_Inicio = () => ({
    type: CARGANDO_COMPANIAS_INICIO,
    payload: {
        companias   : [],
        loading: false,
        error: false
    }
});
const CompaniasAll_Exito = (products) => ({
    type: CARGANDO_COMPANIAS_EXITO,
     payload: {
        companias   : products,
        loading: true,
        error: false
    }
});
const CompaniasAll_Error = (error) => ({
    type: CARGANDO_COMPANIAS_ERROR,
    payload: {
        companias : [],
        loading: false,
        error: error.code
    }
    
});    