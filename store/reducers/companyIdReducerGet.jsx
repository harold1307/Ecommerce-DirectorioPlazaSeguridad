import {
    CARGANDO_COMPANIA_INICIO,
    CARGANDO_COMPANIA_EXITO ,
    CARGANDO_COMPANIA_ERROR
    } from '../types/typeCompanyIdActionGet.jsx';
    
    const initialState = {
        compania : [],
        loading: false,
        error: false
    }
    
    const companyIdReducerGet = (state = initialState, action)=> {
        switch(action.type) {
            case CARGANDO_COMPANIA_INICIO: 
                return {
                    ...state,
                    compania : action.payload.compania,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            case CARGANDO_COMPANIA_EXITO: 
                return {
                    ...state,
                    compania : action.payload.compania,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            case CARGANDO_COMPANIA_ERROR: 
                return {
                    ...state,
                    compania : action.payload.compania,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            default:
                return state;     
        }
    }
    
    export default companyIdReducerGet;