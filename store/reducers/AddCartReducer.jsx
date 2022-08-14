import {
    ADD_CART,
    REMOVE_CART  
    } from '../types/typesAddCart';

const initialState = {
    producto :[]
}

const addCartReducer = (state = initialState, action)=> {
    switch(action.type) {
        case ADD_CART: 

        

        return { ...state, producto: [...state.producto, { ...action.payload.producto, producto:  action.payload.producto }]}
   
        

        case REMOVE_CART: 
            return {
                ...state,
                producto :  [...state.producto, action.payload.producto]     
            }    
                                  
        default:
            return state;     
    }
}

export default addCartReducer;