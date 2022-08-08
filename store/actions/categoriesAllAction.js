import {
    CARGANDO_CATEGORIAS_INICIO,
    CARGANDO_CATEGORIAS_EXITO ,
    CARGANDO_CATEGORIAS_ERROR
    } from '../types/typesCategoriesAll';
    import clienteAxios from '../../configuracion/axios';

    export function cargarCategoriasAll() {
        return async (dispatch) => {
            dispatch( cargarCategoriasAll_Inicio() );    
            try {               
                const categories = await clienteAxios.get('/categories');                   
               dispatch( cargarCategoriasAll_Exito(categories.data) );  
               
    
            } catch (error) {
                console.log(error);               
                dispatch( cargarCategoriasAll_Error(error) );        
            }
        }
    }

    const cargarCategoriasAll_Inicio = () => ({
        type: CARGANDO_CATEGORIAS_INICIO,
        payload: {
            categorias : [],
            loading: false,
            error: false
        }
    });
    const cargarCategoriasAll_Exito = (categories) => ({
        type: CARGANDO_CATEGORIAS_EXITO,
         payload: {
            categorias : categories,
            loading: true,
            error: false
        }
    });
    const cargarCategoriasAll_Error = (error) => ({
        type: CARGANDO_CATEGORIAS_ERROR,
        payload: {
            categorias : [],
            loading: false,
            error: error.code
        }
        
    });    