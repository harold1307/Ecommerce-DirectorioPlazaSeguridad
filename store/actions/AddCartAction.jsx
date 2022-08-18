import {
    ADD_CART,
    REMOVE_CART    
    } from '../types/typesAddCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function addCartAction( productoId , qty ) {
    return async (dispatch) => {          
           toast.info('Agrenando al carrito', {
            position: "bottom-center",
            theme: "light",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
        
        try {        
           console.log( 'productoId:', productoId , qty )
           dispatch( addCartAction_Exito(productoId, qty ) );              
           toast.success('Producto agregado.', {
            position: "bottom-center",
            theme: "light",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: '' ,
            });

        } catch (error) {            
            toast.error('Upp, parece que hubo un error', {
                position: "bottom-center",
                theme: "light",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: ''
                }); 
                console.table(error)
        }
    }
}

const addCartAction_Exito = (productoId, qty) => ({
    type: ADD_CART,  
    payload : {
        productoId, 
        qty
    } 
        
}); 