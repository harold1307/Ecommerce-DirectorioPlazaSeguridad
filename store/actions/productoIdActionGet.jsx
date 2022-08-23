import {
    CARGANDO_PRODUCTO_INICIO,
    CARGANDO_PRODUCTO_EXITO ,
    CARGANDO_PRODUCTO_ERROR
    } from '../types/typeProductoIdActionGet.jsx';
import clienteAxios from '../../configuracion/axios';

export function cargarProductoId(productoId) {
    return async (dispatch) => {
        dispatch( cargarCompaniaId_Inicio() );    
        try {               
            const producto = await clienteAxios.get(`/products/${productoId}`);                   
           dispatch( cargarProductoId_Exito(producto.data) ); 
        } catch (error) {             
            dispatch( cargarProductoId_Error(error) );        
        }
    }
}
const cargarCompaniaId_Inicio = () => ({
    type: CARGANDO_PRODUCTO_INICIO,
    payload: {
        producto : [],
        loading: false,
        error: false
    }
});
const cargarProductoId_Exito = (producto) => ({
    type: CARGANDO_PRODUCTO_EXITO,
     payload: {
        producto : compania,
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