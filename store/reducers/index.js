import { combineReducers } from 'redux';
import categoriesAllreducer from './categoriesAllreducer';
import productsAllreducer from './productsAllreducer';
import authReducer from './authReducer';

export default combineReducers({
    categoriesAll: categoriesAllreducer,   
    productsAll: productsAllreducer,
    authReducer: authReducer
});