import {
    CREAR_EMPRESA_INICIO,
    CREAR_EMPRESA_EXITO ,
    CREAR_EMPRESA_ERROR
    } from '../types/typesCrearEmpresa';
    
    const initialState = {
        empresaC : [],
        loading: false,
        error: false
    }
    
    const crearEmpresaReducerPost = (state = initialState, action)=> {
        switch(action.type) {
            case CREAR_EMPRESA_INICIO: 
                return {
                    ...state,
                    empresaC : action.payload.empresaC,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            case CREAR_EMPRESA_EXITO: 
                return {
                    ...state,
                    empresaC : action.payload.empresaC,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            case CREAR_EMPRESA_ERROR: 
                return {
                    ...state,
                    empresaC : action.payload.empresaC,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }    
            default:
                return state;     
        }
    }
    
    export default crearEmpresaReducerPost;