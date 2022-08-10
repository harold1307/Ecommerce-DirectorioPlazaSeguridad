import {
    ADDCART_INICIO,
    ADDCART_EXITO ,
    ADDCART_ERROR
    } from '../types/typesAddCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function addCartAction( producto ) {
    return async (dispatch) => {          
           toast.info('Agrenando a al carrito', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
        
        try {     
            
                
                    
           dispatch( addCartAction_Exito(producto) );   
               
           toast.success('Producto agregado.', {
           position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: '' ,
            });

        } catch (error) {
            console.log(error);               
            dispatch( addCartAction_Error(error) );             
            toast.error('Upp, parece que hubo un error', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: ''
                }); 
        }
    }
}


const addCartAction_Inicio = () => ({
    type: ADDCART_INICIO,
    payload: {
        producto  : [],
        loading: false,
        error: false
    }
});
const addCartAction_Exito = (producto) => ({
    type: ADDCART_EXITO,
     payload: {
        producto  : producto,
        loading: true,
        error: false
    }
});

const addCartAction_Error = (error) => ({
    type: ADDCART_ERROR,
     payload: {
        producto  : [],
        loading: true,
        error: error.message
    }
});
 