import {
    CARGANDO_COMPANIAS_INICIO,
    CARGANDO_COMPANIAS_EXITO ,
    CARGANDO_COMPANIAS_ERROR
    } from '../types/typesCompaniesAll';
    
    const initialState = {
        companias : [],
        loading: false,
        error: false
    }
    
    const companiesAllreducer = (state = initialState, action)=> {
        switch(action.type) {
            case CARGANDO_COMPANIAS_INICIO: 
                return {
                    ...state,
                    companias : action.payload.companias,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            case CARGANDO_COMPANIAS_EXITO: 
                return {
                    ...state,
                    companias : action.payload.companias,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            case CARGANDO_COMPANIAS_ERROR: 
                return {
                    ...state,
                    companias : action.payload.companias,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            default:
                return state;     
        }
    }
    
    export default companiesAllreducer;