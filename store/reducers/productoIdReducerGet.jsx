import {
    CARGANDO_PRODUCTO_INICIO,
    CARGANDO_PRODUCTO_EXITO ,
    CARGANDO_PRODUCTO_ERROR
    } from '../types/typeProductoIdActionGet.jsx';
    
    const initialState = {
        producto : [],
        loading: false,
        error: false
    }
    
    const productoIdReducerGet = (state = initialState, action)=> {
        switch(action.type) {
            case CARGANDO_PRODUCTO_INICIO: 
                return {
                    ...state,
                    producto : action.payload.producto,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            case CARGANDO_PRODUCTO_EXITO: 
                return {
                    ...state,
                    producto : action.payload.producto,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            case CARGANDO_PRODUCTO_ERROR: 
                return {
                    ...state,
                    producto : action.payload.producto,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            default:
                return state;     
        }
    }
    
    export default productoIdReducerGet;