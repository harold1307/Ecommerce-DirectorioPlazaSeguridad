import { combineReducers } from 'redux';
import categoriesAllreducer from './categoriesAllreducer';
import productsAllreducer from './productsAllreducer';
import authReducer from './authReducer';
import addCartReducer from './AddCartReducer';
import companiesAllreducer from './companiesAllreducer';
import companyIdReducerGet from './companyIdReducerGet';
import productoIdReducerGet from './productoIdReducerGet';
import crearEmpresaReducerPost from './crearEmpresaReducerPost'

export default combineReducers({
    categoriesAll: categoriesAllreducer,   
    productsAll: productsAllreducer,
    authReducer: authReducer,
    addCartReducer : addCartReducer,
    companiesAll : companiesAllreducer,
    companyIdGet : companyIdReducerGet,
    productoIdGet: productoIdReducerGet,
    crearEmpresaPost : crearEmpresaReducerPost
});