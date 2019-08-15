import {GET_ALL_CATEGORIES, ADD_NEW_CATEGORY} from '../actions/types';

const initalState = {
    categories : []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ADD_NEW_CATEGORY:
            console.log(action.payload);
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            }
        default:
            return state;
    }
}