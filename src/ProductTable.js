import React from 'react';

import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import "./css/ProductTable.css";

const ProductTable = (props) => {
    const { products, filterText, inStockOnly } = props;

    // Logic for filtering products based on matched text startsWith()
    let filteredProducts = products;
    if (filterText !== "") {
        filteredProducts = products.filter(product => {
            return product.name.startsWith(filterText)
        })
    }
    else if (inStockOnly) {
        filteredProducts = products.filter(product => {
            return product.stocked
        })
    }
    
    let rows = []
    let lastCategory = null;
    filteredProducts.forEach(product => {
        if (product.category !== lastCategory) {
            lastCategory = product.category;
            rows.push(<ProductCategory category={product.category} key={product.category}/>);
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

export default ProductTable
