import React from 'react';

import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import "./css/ProductTable.css";

const ProductTable = (props) => {
    const { products, filterText, inStockOnly } = props;
    // Logic for filtering products based on matched text startsWith()
    let filteredProducts = products;
    // Filter products by name based on text in search box
    if (filterText !== "") {
        filteredProducts = filteredProducts.filter(product => {
            return product.name.toLowerCase().startsWith(filterText.toLowerCase());
        })
    }
    // If in stock only checked then filter products with that attribute
    if (inStockOnly) {
        filteredProducts = filteredProducts.filter(product => {
            return product.stocked
        })
    }

    let rows = []
    let lastCategory = null;
    filteredProducts.forEach(product => {
        if (product.category !== lastCategory) {
            lastCategory = product.category;
            rows.push(<ProductCategory category={product.category} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={product.name} />)
    });

    return (
        <div>
            <h2>Product Table</h2>
            <table>
                <thead>
                    <tr>
                        <th className="tableHeader">Name</th>
                        <th className="tableHeader">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;


