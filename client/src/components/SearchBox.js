import React, { Component } from 'react';

import InputGroup from './InputGroup';
import {
    Button,
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form
} from 'reactstrap';

// CSS
import '../css/SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        // State for the dropdown button
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            showModal: false,
            newProduct: {
                name: "",
                price: 0,
                category: "",
                stocked: true,
                errors: {
                    nameError: "",
                    priceError: "",
                    categoryError: ""
                }
            }
        };
    }

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    }

    handleSortByChange = (sortByCode) => {
        this.props.onSortByChange(sortByCode);
    }

    handleNewProductFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            newProduct: {
                ...this.state.newProduct,
                [name]: value
            }
        });


    }

    submitNewProduct = () => {
        console.log(this.state.newProduct);

        // Check for errors

        // Dispatch action to add new item
        this.props.addNewProduct(this.state.newProduct)

        this.setState({
            showModal: false,
            newProduct: {
                name: "",
                price: 0,
                category: "",
                stocked: true
            }
        })
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    toggle = () => {
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

                    {/* Sort By */}
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret color="primary">
                            Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.handleSortByChange.bind(this, 1)}>A-Z</DropdownItem>
                            <DropdownItem onClick={this.handleSortByChange.bind(this, 2)}>Z-A</DropdownItem>
                            <DropdownItem onClick={this.handleSortByChange.bind(this, 3)}>Name Length</DropdownItem>
                            <DropdownItem onClick={this.handleSortByChange.bind(this, 4)}>Price</DropdownItem>
                            <DropdownItem disabled>Stock Sold</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                    {/* Add New Product */}
                    <Button color="danger" onClick={this.showModal}>Add New Product</Button>
                    <Modal isOpen={this.state.showModal} toggle={this.showModal}>
                        <ModalHeader toggle={this.showModal} className="modalHeader">New Product</ModalHeader>
                        <Form>
                            <ModalBody>
                                <InputGroup
                                    type="text"
                                    labeltext="Name"
                                    name="name"
                                    id="productName"
                                    onChange={this.handleNewProductFormChange}
                                    error={this.state.newProduct.errors.nameError}
                                />
                                <InputGroup
                                    type="text"
                                    labeltext="Price"
                                    name="price"
                                    id="productPrice"
                                    onChange={this.handleNewProductFormChange}
                                    error={this.state.newProduct.errors.priceError}
                                />
                                <InputGroup
                                    type="select"
                                    labeltext="Select Category"
                                    name="category"
                                    id="category"
                                    onChange={this.handleNewProductFormChange}
                                    error={this.state.newProduct.errors.categoryError}
                                >
                                    {/* Options of the select dropdown */}
                                    <option default value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Sporting Goods">Sporting Goods</option>
                                </InputGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.submitNewProduct} color="primary">Add Product</Button>{' '}
                            </ModalFooter>
                        </Form>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default SearchBox;
