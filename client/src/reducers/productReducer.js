import { SET_FILTERED_TEXT, SET_IN_STOCK_ONLY, GET_ALL_PRODUCTS, SET_SORTBY_CODE } from '../actions/types';

const initialState = {
    // allProducts: [
    //     { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    //     { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    //     { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    //     { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    //     { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    //     { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    // ],
    // filteredProducts: [
    //     { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    //     { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    //     { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    //     { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    //     { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    //     { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    // ],
    allProducts: [],
    filteredProducts: [],
    sortByCode: 4,
    filterText: '',
    inStockOnly: false
}

// Get the new list of filteredProducts based on updated filterText and inStock only values(REFACTORED FROM SEARCHABLEPRODUCTTABLE.JS)
const updateFilteredProducts = (allProducts, filterText, inStockOnly) => {
    let filteredProducts = allProducts;
    if (filterText !== "") {
        filteredProducts = filteredProducts.filter(product => {
            return product.name.toLowerCase().startsWith(filterText.toLowerCase());
        })
    }
    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => {
            return product.stocked
        })
    }
    return filteredProducts;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            const allProducts = action.payload;
            return {
                ...state,
                allProducts: allProducts,
                filteredProducts: allProducts
            }
        case SET_FILTERED_TEXT:
            return {
                ...state,
                filteredProducts: updateFilteredProducts(state.allProducts, action.payload, state.inStockOnly),
                filterText: action.payload
            }
        case SET_IN_STOCK_ONLY:
            return {
                ...state,
                filteredProducts: updateFilteredProducts(state.allProducts, state.filterText, action.payload),
                inStockOnly: action.payload
            }
        case SET_SORTBY_CODE:
            return {
                ...state,
                sortByCode: action.payload
            }
        default:
            return state;
    }
}