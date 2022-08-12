import {
    ADD_CART,
    REMOVE_CART  
    } from '../types/typesAddCart';

const initialState = {
    producto :null
}

const addCartReducer = (state = initialState, action)=> {
    switch(action.type) {
        case ADD_CART: 
            return {
                ...state,             
                producto    :  action.payload.producto               
            }
        case REMOVE_CART: 
            return {
                producto: [ ]
            }    
                                  
        default:
            return state;     
    }
}

export default addCartReducer;