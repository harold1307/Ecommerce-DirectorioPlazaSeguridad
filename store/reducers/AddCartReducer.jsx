import {
    ADDCART_INICIO,
    ADDCART_EXITO ,
    ADDCART_ERROR
    } from '../types/typesAddCart';

const initialState = {
    producto : [],
    loading: false,
    error: false
}

const addCartReducer = (state = initialState, action)=> {
    switch(action.type) {
        case ADDCART_INICIO: 
            return {
                ...state,
                producto  : action.payload.producto,
                loading: action.payload.loading,
                error: action.payload.error,
            }
        case ADDCART_EXITO: 
            return {
                ...state,
                producto  :action.payload.producto,
                loading: action.payload.loading,
                error: action.payload.error,
            }    
        case ADDCART_ERROR: 
            return {
                ...state,
                producto  : action.payload.producto,
                loading: action.payload.loading,
                error: action.payload.error,
            }                            
        default:
            return state;     
    }
}

export default addCartReducer;