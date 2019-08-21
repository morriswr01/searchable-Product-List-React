import axios from 'axios';
import { returnErrors } from './errorActions';
import { getAllProducts } from './productActions';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	CLEAR_PRODUCTS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';

// Login
export const login = (loginDetails) => dispatch => {
	// Send login details to login to request a token
	axios.post('api/users/auth', loginDetails)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
			dispatch(getAllProducts())
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status, LOGIN_FAIL));
			dispatch({
				type: LOGIN_FAIL
			})
		})
}

// Register User
export const register = (registerationDetails) => dispatch => {
	// Send registration details and request a token
	axios.post('api/users', registerationDetails)
		.then(res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
			dispatch(getAllProducts())
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAIL));
			dispatch({
				type: REGISTER_FAIL
			})
		})
}

// Logout user
export const logout = () => dispatch => {
	dispatch({ type: LOGOUT_SUCCESS });
	dispatch({ type: CLEAR_PRODUCTS });
}


// Check token and load user
export const loadUser = () => (dispatch, getState) => {
	// User loading
	dispatch({ type: USER_LOADING });

	// Get token from local storage and then us it to get a valid userID from the database backend.
	axios
		.get('/api/users/user', tokenConfig(getState))
		// If successfull dispatch USER_LOADED else dispatch GET_ERRORS and then an auth error
		.then(res =>
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		)
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};

// Setup the config object to be passed in with the request. This is so that the token is in the header.
export const tokenConfig = getState => {
	// Get token from localstorage. Assumes there is one
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	};

	// If token, add to headers
	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};