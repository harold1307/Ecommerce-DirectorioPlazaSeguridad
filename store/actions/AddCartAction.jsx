import {
    ADD_CART,
    REMOVE_CART    
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
           
        console.log('addCart:', producto);       
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

const addCartAction_Exito = (producto) => ({
    type: ADD_CART,
     payload: {
        producto : producto
    }
}); 