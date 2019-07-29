import { SET_FILTERED_TEXT, SET_IN_STOCK_ONLY } from '../actions/types';

const initialState = {
    allProducts: [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ],
    filteredProducts: [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ],
    filterText: '',
    inStockOnly: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERED_TEXT:
            return {
                ...state,
                filterText: action.payload
            }
        case SET_IN_STOCK_ONLY:
            return {
                ...state,
                inStockOnly: action.payload
            }
        default:
            return state;
    }
}