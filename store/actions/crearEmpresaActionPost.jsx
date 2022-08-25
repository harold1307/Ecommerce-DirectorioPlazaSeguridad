import {
    CREAR_EMPRESA_INICIO,
    CREAR_EMPRESA_EXITO ,
    CREAR_EMPRESA_ERROR
    } from '../types/typesCrearEmpresa';
    import clienteAxios from '../../configuracion/axios';

    export function crearEmpresaPost(dataEmpresaC) {
        return async (dispatch) => {
            dispatch( crearEmpresaPost_Inicio(dataEmpresaC) );    
            try {               
                const empresaC = await clienteAxios.post('/companies', JSON.stringify( dataEmpresaC ));                   
                dispatch( crearEmpresaPost_Exito(empresaC));  

            } catch (error) {               
                dispatch( crearEmpresaPost_Error(error) );        
            }
        }
    }

    const crearEmpresaPost_Inicio = (dataEmpresaC) => ({
        type: CREAR_EMPRESA_INICIO,
        payload: {
            empresaC : dataEmpresaC,
            loading: false,
            error: false
        }
    });
    const crearEmpresaPost_Exito = (empresaC) => ({
        type: CREAR_EMPRESA_EXITO,
         payload: {
            empresaC : empresaC,
            loading: true,
            error: false
        }
    });
    const crearEmpresaPost_Error = (error) => ({
        type: CREAR_EMPRESA_ERROR,
        payload: {
            empresaC : [],
            loading: false,
            error: error
        }   
    });    