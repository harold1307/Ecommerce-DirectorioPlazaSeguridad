import { bindActionCreators } from 'redux';
import {
    ADD_CART,
    REMOVE_CART  
    } from '../types/typesAddCart';

const initialState = {
    cart :[]
}

const addCartReducer = (state = {
    cart: []
}, action)=> {
    switch(action.type) {
        
        case ADD_CART:   
             const productId = action.payload.productoId;   
             if (state.cart.findIndex(productid => productid  === productId) !== -1) {
                console.log('repetido')
             }    
            return {               
               cart : [ ...state.cart, action.payload.productoId]
            }
                
        case REMOVE_CART: 
            return {
                producto: [
                    ...state.producto,
                    addProductsJSON.stringify(action.payload.producto) 
                       
                ]
            }    
                                  
        default:
            return state;     
    }
}

export default addCartReducer;