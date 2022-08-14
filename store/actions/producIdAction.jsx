import {
    CARGANDO_PRODUCTO_INICIO,
    CARGANDO_PRODUCTO_EXITO ,
    CARGANDO_PRODUCTO_ERROR
    } from '../types/typesProductAll';
import clienteAxios from '../../configuracion/axios';

export function cargarProductoId(id) {
    return async (dispatch) => {
        dispatch( cargarProductoId_Inicio() );    
        try {               
            const product = await clienteAxios.get('/products', id);                   
            dispatch( cargarProductoId_Exito(product.data) );  
        } catch (error) {
            console.log(error);               
            dispatch( cargarProductoId_Error(error) );        
        }
    }
}

const cargarProductoId_Inicio = () => ({
    type: CARGANDO_PRODUCTO_INICIO,
    payload: {
        producto  : [],
        loading: false,
        error: false
    }
});
const cargarProductoId_Exito = (producto) => ({
    type: CARGANDO_PRODUCTO_EXITO,
     payload: {
        producto  : producto,
        loading: true,
        error: false
    }
});
const cargarProductoId_Error = (error) => ({
    type: CARGANDO_PRODUCTO_ERROR,
    payload: {
        producto : [],
        loading: false,
        error: error.code
    }
    
});    