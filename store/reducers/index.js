import { combineReducers } from 'redux';
import categoriesAllreducer from './categoriesAllreducer';
import productsAllreducer from './productsAllreducer';

export default combineReducers({
    categoriesAll: categoriesAllreducer,   
    productsAll: productsAllreducer
});