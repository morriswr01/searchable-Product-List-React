import { combineReducers } from 'redux';

// Reducers
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    auth: authReducer,
    error: errorReducer
});