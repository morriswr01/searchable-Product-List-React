import axios from 'axios';
import { SET_FILTERED_TEXT, SET_IN_STOCK_ONLY, GET_ALL_PRODUCTS, SET_SORTBY_CODE, ADD_NEW_PRODUCT } from './types';

export const setFilteredText = filteredText => ({
    type: SET_FILTERED_TEXT,
    payload: filteredText
});

export const setInStockOnly = inStockOnly => ({
    type: SET_IN_STOCK_ONLY,
    payload: inStockOnly
});

export const setSortByCode = sortByCode => ({
    type: SET_SORTBY_CODE,
    payload: sortByCode
});

export const getAllProducts = () => dispatch => {
    axios
        .get('/api/products')
        .then(res => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.data));
};

export const addNewProduct = newProduct => dispatch => {
    axios
        .post('api/products', newProduct)
        .then(() => {
            dispatch({
                type: ADD_NEW_PRODUCT,
                payload: newProduct
            });
        })
        .catch(err => console.log(err.response.data))
}