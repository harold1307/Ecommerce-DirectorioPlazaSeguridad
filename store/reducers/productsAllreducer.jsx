import {
    CARGANDO_PRODUCTOS_INICIO,
    CARGANDO_PRODUCTOS_EXITO ,
    CARGANDO_PRODUCTOS_ERROR
    } from '../types/typesProductsAll';
   
const initialState = {
    productos : [],
    loading: false,
    error: false
}

const productsAllreducer = (state = initialState, action) => {
    switch(action.type) {
        case CARGANDO_PRODUCTOS_INICIO: 
            return {
                ...state,
                productos : action.payload.productos,
                loading: action.payload.loading,
                error: action.payload.error,
            }
        case CARGANDO_PRODUCTOS_EXITO: 
            return {
                ...state,
                productos : action.payload.productos,
                loading: action.payload.loading,
                error: action.payload.error,
            }    
        case CARGANDO_PRODUCTOS_ERROR: 
            return {
                ...state,
                productos : action.payload.productos,
                loading: action.payload.loading,
                error: action.payload.error,
            }    
        default:
            return state;     
    }
}

export default productsAllreducer;

