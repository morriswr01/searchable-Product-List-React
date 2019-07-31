import React from 'react';

// CSS
import '../css/SearchBox.css';

const SearchBox = (props) => {
    const { filterText, onFilterTextChange, onInStockChange } = props;

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value);
    }

    const handleInStockChange = (e) => {
        onInStockChange(e.target.checked);
    }

    return (
        <div className="SearchBox">
            <input 
                className="inputBox"
                type="text"
                placeholder={filterText !== '' ? filterText : "Search..."}
                onChange={handleFilterTextChange}
            /><br />
            <input
                className="stockOnlyCheckbox"
                type="checkbox" 
                name="filterProductsInStock" 
                onChange={handleInStockChange}
            />Only show products in stock
        </div>
    )
}

export default SearchBox;
