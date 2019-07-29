import { SET_FILTERED_TEXT, SET_IN_STOCK_ONLY } from './types';

export const setFilteredText = filteredText => ({
    type: SET_FILTERED_TEXT,
    payload: filteredText
});

export const setInStockOnly = inStockOnly => ({
    type: SET_IN_STOCK_ONLY,
    payload: inStockOnly
});