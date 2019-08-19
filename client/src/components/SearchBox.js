import React, { Component } from 'react';

import {
    Button,
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Modal,
    ModalHeader,
    Form,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

// CSS
import '../css/SearchBox.css';
import '../css/InputGroup.css';
import InputGroup from './InputGroup'
import NewProductForm from './NewProductForm';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        // State for the dropdown button
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            showProductModal: false,
            // New product state
            newProduct: {
                name: "",
                price: 0,
                category: "",
                stocked: false,
                errors: {
                    generalError: ""
                }
            },
            // New category state
            showCategoryModal: false,
            newCategory: {
                name: "",
                generalError: ""
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
        let value = e.target.value;
        let errorMessage = "";

        if (name === "stocked") {
            value = e.target.checked;
        }

        this.setState({
            ...this.state,
            newProduct: {
                ...this.state.newProduct,
                [name]: value,
                errors: {
                    ...this.state.newProduct.errors,
                    [`${[name]}Error`]: errorMessage
                }
            }
        });


    }

    handleCategoryFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            newCategory: {
                ...this.state.newCategory,
                [name]: value
            }
        });
    }

    submitNewProduct = () => {
        // Check for errors
        const { name, category, price } = this.state.newProduct;

        if (!name || !category || !price) {
            this.setState({
                ...this.state,
                newProduct: {
                    ...this.state.newProduct,
                    errors: {
                        ...this.state.newProduct.errors,
                        generalError: "All inputs must be filled to add a new product"
                    }
                }
            });
            return;
        }

        this.props.addNewProduct(this.state.newProduct);

        this.setState({
            ...this.state,
            showProductModal: false,
            newProduct: {
                ...this.state.newProduct,
                name: "",
                price: 0,
                category: "",
                stocked: false
            }
        })
    }

    submitNewCategory = () => {
        // Check for errors
        const { name } = this.state.newCategory;

        if (!name) {
            this.setState({
                ...this.state,
                newCategory: {
                    ...this.state.newCategory,
                    generalError: "A name must be entered to add a category"
                }
            });
            return;
        }

        this.props.addNewCategory(this.state.newCategory.name)

        this.setState({
            ...this.state,
            showCategoryModal: false,
            newCategory: {
                name: "",
                generalError: ""
            }
        })
    }

    showProductModal = () => {
        this.setState({
            showProductModal: !this.state.showProductModal,
            newProduct: {
                name: "",
                price: 0,
                category: "",
                stocked: false,
                errors: {
                    generalError: "",
                }
            }
        })
    }

    showCategoryModal = () => {
        this.setState({
            showCategoryModal: !this.state.showCategoryModal,
            newCategory: {
                name: "",
                generalError: ""
            }
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

                    {/* Add New Category */}
                    <Button color="success" onClick={this.showCategoryModal}>Add New Category</Button>
                    <Modal isOpen={this.state.showCategoryModal} toggle={this.showCategoryModal}>
                        <ModalHeader
                            toggle={this.showCategoryModal}
                            className="modalHeader">
                            New Category
                        </ModalHeader>
                        <ModalBody>
                            {(this.state.newCategory.generalError) ?
                                <small className="text-danger">{this.state.newCategory.generalError}</small>
                                : ""
                            }
                            <Form>
                                <InputGroup
                                    type="text"
                                    labeltext="Name"
                                    name="name"
                                    id="categoryName"
                                    onChange={this.handleCategoryFormChange}
                                />
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={this.submitNewCategory}
                            >
                                Add Product
                            </Button>{' '}
                        </ModalFooter>
                    </Modal>

                    {/* Add New Product */}
                    <Button color="danger" onClick={this.showProductModal}>Add New Product</Button>
                    <Modal isOpen={this.state.showProductModal} toggle={this.showProductModal}>
                        <ModalHeader toggle={this.showProductModal} className="modalHeader">New Product</ModalHeader>

                        <ModalBody>
                            {(this.state.newProduct.errors.generalError) ?
                                <small className="text-danger">{this.state.newProduct.errors.generalError}</small>
                                : ""
                            }
                            <NewProductForm
                                onNewProductFormChange={this.handleNewProductFormChange}
                                categories={this.props.categories}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={this.submitNewProduct}
                                color="primary">
                                Add Product
                            </Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default SearchBox;
