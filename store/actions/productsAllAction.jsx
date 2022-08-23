import {
    CARGANDO_PRODUCTOS_INICIO,
    CARGANDO_PRODUCTOS_EXITO ,
    CARGANDO_PRODUCTOS_ERROR
    } from '../types/typesProductsAll';
import clienteAxios from '../../configuracion/axios';

export function cargarProductosAll() {
    return async (dispatch) => {
        dispatch( cargarProductosAll_Inicio() );    
        try {               
            const products = await clienteAxios.get('/products');                   
            dispatch( cargarProductosAll_Exito(products.data) );  
        } catch (error) {             
            dispatch( cargarProductosAll_Error(error) );        
        }
    }
}

const cargarProductosAll_Inicio = () => ({
    type: CARGANDO_PRODUCTOS_INICIO,
    payload: {
        productos  : [],
        loading: false,
        error: false
    }
});
const cargarProductosAll_Exito = (products) => ({
    type: CARGANDO_PRODUCTOS_EXITO,
     payload: {
        productos  : products,
        loading: true,
        error: false
    }
});
const cargarProductosAll_Error = (error) => ({
    type: CARGANDO_PRODUCTOS_ERROR,
    payload: {
        productos : [],
        loading: false,
        error: error.code
    }
    
});    