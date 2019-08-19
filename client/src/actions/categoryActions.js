import axios from 'axios';

import { GET_ALL_CATEGORIES, ADD_NEW_CATEGORY } from './types';

export const getAllCategories = () => dispatch => {
    axios
    .get('/api/categories')
    .then(res => {
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
        });
    })
    .catch(err => console.log(err.response.data));
}

export const addNewCategory = (name) => dispatch => {
    axios
        .post('api/categories', {name})
        .then((res) => {
            dispatch({
                type: ADD_NEW_CATEGORY,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response.data));
}