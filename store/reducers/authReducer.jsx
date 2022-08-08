import {
    AUTH_INICIO,
    AUTH_EXITO ,
    AUTH_ERROR,
    AUTH_CERRAR,
 

    } from '../types/typesAuth';
    
    const initialState = {
        dataUser : [],
        loading: false,
        error: false
    }
    
    const authReducer = (state = initialState, action)=> {
        switch(action.type) {
            case AUTH_INICIO: 
                return {
                    ...state,
                    dataUser  : action.payload.dataUser,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            case AUTH_EXITO: 
                return {
                    ...state,
                    dataUser  : action.payload.dataUser ,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            case AUTH_ERROR: 
                return {
                    ...state,
                    dataUser  : action.payload.dataUser ,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }   
            case AUTH_CERRAR: 
                return {
                    ...state,
                    dataUser  : action.payload.dataUser ,
                    loading: action.payload.loading,
                    error: action.payload.error
                }                   
            default:
                return state;     
        }
    }
    
    export default authReducer;