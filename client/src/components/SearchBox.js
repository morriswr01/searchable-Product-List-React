import React from 'react';

const SearchBox = (props) => {
    const { filterText, onFilterTextChange, onInStockChange } = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }

    const handleInStockChange = (e) => {
        onInStockChange(e.target.checked);
    }

    return (
        <div>
            <input type="text" 
                placeholder={filterText !== '' ? filterText : "Search..."}
                onChange={handleFilterTextChange}
            /><br />
            <input 
                type="checkbox" 
                name="filterProductsInStock" 
                onChange={handleInStockChange}
            />Only show products in stock
        </div>
    )
}

export default SearchBox;
