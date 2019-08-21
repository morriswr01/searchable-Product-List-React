import axios from 'axios';
import { SET_FILTERED_TEXT, SET_IN_STOCK_ONLY, GET_ALL_PRODUCTS, SET_SORTBY_CODE, ADD_NEW_PRODUCT, DELETE_PRODUCT, CLEAR_PRODUCTS } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

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

export const clearProducts = () => ({
    type: CLEAR_PRODUCTS
});

export const getAllProducts = () => (dispatch, getState) => {
    axios
        .get('/api/products', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addNewProduct = newProduct => (dispatch, getState) => {
    axios
        .post('api/products', newProduct, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_NEW_PRODUCT,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteProduct = id => (dispatch, getState) => {
    axios
        .delete('api/products', { headers: tokenConfig(getState).headers }, { data: { id: id } })
        .then((res) => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};