import React from 'react';
import {
    Button,
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap';

// CSS
import '../css/SearchBox.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        // State for the dropdown button
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="SearchBox">
                <input
                    className="inputBox"
                    type="text"
                    placeholder={this.props.filterText !== '' ? this.props.filterText : "Search..."}
                    onChange={this.handleFilterTextChange}
                /><br />
                <input
                    className="stockOnlyCheckbox"
                    type="checkbox"
                    name="filterProductsInStock"
                    onChange={this.handleInStockChange}
                />Only show products in stock
                <div className="buttons">
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret color="primary">
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>A-Z</DropdownItem>
                            <DropdownItem>Z-A</DropdownItem>
                            <DropdownItem>Name Length</DropdownItem>
                            <DropdownItem>Price</DropdownItem>
                            <DropdownItem disabled>Stock Sold</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <Button color="danger">Add New Product</Button>
                </div>
            </div>
        )
    }
}

export default SearchBox;
