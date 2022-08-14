import { combineReducers } from 'redux';
import categoriesAllreducer from './categoriesAllreducer';
import productsAllreducer from './productsAllreducer';
import authReducer from './authReducer';
import addCartReducer from './AddCartReducer';
import companiesAllreducer from './companiesAllreducer';
import productAllreducer from './productAllreducer';

export default combineReducers({
    categoriesAll: categoriesAllreducer,   
    productsAll: productsAllreducer,
    authReducer: authReducer,
    addCartReducer : addCartReducer,
    companiesAll : companiesAllreducer,
    productAll : productAllreducer
});