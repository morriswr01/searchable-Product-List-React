import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';

// Components
import SearchBox from '../components/SearchBox'
import ProductTable from '../components/ProductTable'

// Actions
import { setFilteredText, setInStockOnly, getAllProducts, setSortByCode, addNewProduct, deleteProduct } from '../actions/productActions';

// CSS
import '../css/SearchableProductTable.css';

class SearchableProductTable extends Component {

    componentDidMount() {
        this.props.getAllProducts();
    }

    handleFilterTextChange = (filterText) => {
        this.props.setFilteredText(filterText);
    }

    handleInStockChange = (inStockOnly) => {
        this.props.setInStockOnly(inStockOnly);
    }

    handleSortByChange = (sortByCode) => {
        this.props.setSortByCode(sortByCode);
    }

    handleNewProduct = (newProduct) => {
       this.props.addNewProduct(newProduct);
    }

    handleDeletedProduct = (id) => {
        this.props.deleteProduct(id);
    }

    sortFilteredProducts = (filteredProducts, sortByCode) => {
        switch (sortByCode) {
            case 1:
                // A-Z
                return sortBy(filteredProducts, [(product) => { return product.name.toLowerCase(); }]);
            case 2:
                // Z-A
                return sortBy(filteredProducts, [(product) => { return product.name.toLowerCase(); }]).reverse();
            case 3:
                // Name Length
                return sortBy(filteredProducts, [(product) => { return product.name.length; }]);
            case 4:
                // Price
                return sortBy(filteredProducts, ['price']);
            default:
                return filteredProducts;
        }
    }

    render() {
        const { filteredProducts, filterText, inStockOnly, sortByCode } = this.props;
        const sortedFilteredProducts = this.sortFilteredProducts(filteredProducts, sortByCode);
        return (
            <div className="SearchableProductTable">
                <h1 className="title">Searchable Product Table</h1>
                <SearchBox
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                    onSortByChange={this.handleSortByChange}
                    addNewProduct={this.handleNewProduct}
                />
                <ProductTable
                    products={sortedFilteredProducts}
                    onDeletedProduct={this.handleDeletedProduct}
                />
            </div>
        )
    }
}

SearchableProductTable.propTypes = {
    filteredProducts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    filteredProducts: state.products.filteredProducts,
    filterText: state.products.filterText,
    inStockOnly: state.products.inStockOnly,
    sortByCode: state.products.sortByCode
});

export default connect(mapStateToProps, { setFilteredText, setInStockOnly, getAllProducts, setSortByCode, addNewProduct, deleteProduct })(SearchableProductTable);