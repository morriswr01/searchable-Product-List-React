import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import SearchBox from '../components/SearchBox'
import ProductTable from '../components/ProductTable'

// Actions
import { setFilteredText, setInStockOnly } from '../actions/productActions';

// CSS
import '../css/SearchableProductTable.css';

const SearchableProductTable = (props) => {

    const handleFilterTextChange = (filterText) => {
        props.setFilteredText(filterText);
    }

    const handleInStockChange = (inStockOnly) => {
        props.setInStockOnly(inStockOnly);
    }

    const { filteredProducts, filterText, inStockOnly } = props;
    return (
        <div className="SearchableProductTable">
            <h1 className="title">Searchable Product Table</h1>
            <SearchBox
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />
            <ProductTable
                products={filteredProducts}
            />
        </div>
    )
}

SearchableProductTable.propTypes = {
    filteredProducts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    filteredProducts: state.products.filteredProducts,
    filterText: state.products.filterText,
    inStockOnly: state.products.inStockOnly
});

export default connect(mapStateToProps, { setFilteredText, setInStockOnly })(SearchableProductTable);






// THIS IS THE CLASS EQUIVALENT OF THE ABOVE
// class SearchableProductTable extends Component {

//     handleFilterTextChange = (filterText) => {
//         this.props.setFilteredText(filterText);
//     }

//     handleInStockChange = (inStockOnly) => {
//         this.props.setInStockOnly(inStockOnly);
//     }

//     render() {
//         const { filteredProducts, filterText, inStockOnly } = this.props;
//         return (
//             <div className="SearchableProductTable">
//                 <h1 className="title">Searchable Product Table</h1>
//                 <SearchBox
//                     filterText={filterText}
//                     inStockOnly={inStockOnly}
//                     onFilterTextChange={this.handleFilterTextChange}
//                     onInStockChange={this.handleInStockChange}
//                 />
//                 <ProductTable
//                     products={filteredProducts}
//                     filterText={filterText}
//                     inStockOnly={inStockOnly}
//                 />
//             </div>
//         )
//     }

// }