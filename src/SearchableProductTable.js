import React, {Component} from 'react';

// Components
import SearchBox from './SearchBox'
import ProductTable from './ProductTable'

// CSS
import './css/SearchableProductTable.css';

class SearchableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    
    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    }

    handleInStockChange = (inStockOnly) => {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div className="SearchableProductTable">
                <h1 className="title">Searchable Product Table</h1>
                <SearchBox 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly} 
                    onFilterTextChange={this.handleFilterTextChange} 
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable 
                    products={this.props.products} 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

export default SearchableProductTable
