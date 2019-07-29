import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import SearchBox from './SearchBox'
import ProductTable from './ProductTable'

// CSS
import './css/SearchableProductTable.css';

class SearchableProductTable extends Component {

    handleFilterTextChange(filterText) {
        // this.setState({
        //     filterText: filterText
        // })
    }

    handleInStockChange(inStockOnly) {
        // this.setState({
        //     inStockOnly: inStockOnly
        // })
    }

    render() {
        const { filteredProducts, filterText, inStockOnly } = this.props;
        return (
            <div className="SearchableProductTable">
                <h1 className="title">Searchable Product Table</h1>
                <SearchBox
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={filteredProducts}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
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
    inStockOnly: state.products.inStockOnly
});

export default connect(mapStateToProps)(SearchableProductTable);