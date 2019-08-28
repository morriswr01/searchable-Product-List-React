import { 
    SET_FILTERED_TEXT,
    SET_IN_STOCK_ONLY,
    GET_ALL_PRODUCTS,
    SET_SORTBY_CODE,
    ADD_NEW_PRODUCT,
    DELETE_PRODUCT,
    CLEAR_PRODUCTS
} from '../actions/types';

const initialState = {
    allProducts: [],
    filteredProducts: [],
    sortByCode: 1,
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
        // Empty all arrays of products
        case CLEAR_PRODUCTS:
            return initialState;
        // Get all products from payload and set arrays to them
        case GET_ALL_PRODUCTS:
            const allProducts = action.payload;
            return {
                ...state,
                allProducts: allProducts,
                filteredProducts: allProducts
            }
        // Set filtered text field and updateFilteredProducts based on content of filterText
        case SET_FILTERED_TEXT:
            return {
                ...state,
                filteredProducts: updateFilteredProducts(state.allProducts, action.payload, state.inStockOnly),
                filterText: action.payload
            }
        // Set inStockOnly field and updateFilteredProducts based on value of inStockOnly field
        case SET_IN_STOCK_ONLY:
            return {
                ...state,
                filteredProducts: updateFilteredProducts(state.allProducts, state.filterText, action.payload),
                inStockOnly: action.payload
            }
        // Set the code of sort by
        case SET_SORTBY_CODE:
            return {
                ...state,
                sortByCode: action.payload
            }
        // Add new product to filteredProducts
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                filteredProducts: [
                    ...state.filteredProducts,
                    action.payload
                ]
            }
        // Remove product in payload
        case DELETE_PRODUCT:
            const newFilteredProducts = state.filteredProducts.filter(product => {
                return (product._id !== action.payload) ? true : false;
            });
            return {
                ...state,
                filteredProducts: newFilteredProducts
            }
        default:
            return state;
    }
}