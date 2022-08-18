import {
    ADD_CART,
    REMOVE_CART  
} from '../types/typesAddCart';

const addCartReducer = (state = {
    cart: []
}, action)=> {
    switch(action.type) {        
        case ADD_CART:   
             const productId = action.payload.productoId;   
             if (state.cart.findIndex(productid => productid === productId) !== -1) {  
                console.log('Producto ya agregado...');         
               return {
                cart : [ ...state.cart]
               } 
             } else {  
                return {               
                cart : [ ...state.cart, action.payload.productoId]
                }
            }               
        case REMOVE_CART: 
            productId = action.payload.productoId;  
            const productFilter = state.cart.filter(productid => productid._id  != productId);    
            console.log(...state.cart ,productFilter, productId )         
            return {               
                cart : [ ...productFilter ]
            }                                   
        default:
            return state;     
    }
}

export default addCartReducer;