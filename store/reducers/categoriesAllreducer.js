import {
CARGANDO_CATEGORIAS_INICIO,
CARGANDO_CATEGORIAS_EXITO ,
CARGANDO_CATEGORIAS_ERROR
} from '../types/typesCategoriesAll';

const initialState = {
    categorias : [],
    loading: false,
    error: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CARGANDO_CATEGORIAS_INICIO: 
            return {
                ...state,
                categorias : action.payload.categorias,
                loading: action.payload.loading,
                error: action.payload.error,
            }
        case CARGANDO_CATEGORIAS_EXITO: 
            return {
                ...state,
                categorias : action.payload.categorias,
                loading: action.payload.loading,
                error: action.payload.error,
            }    
        case CARGANDO_CATEGORIAS_ERROR: 
            return {
                ...state,
                categorias : action.payload.categorias,
                loading: action.payload.loading,
                error: action.payload.error,
            }    
        default:
            return state;     
    }
}