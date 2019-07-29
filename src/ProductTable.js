import React from 'react';

import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import "./css/ProductTable.css";

const ProductTable = (props) => {
    const { products } = props;

    const rows = (products) => {
        let rows = []
        let lastCategory = null;
        products.forEach(product => {
            if (product.category !== lastCategory) {
                lastCategory = product.category;
                rows.push(<ProductCategory category={product.category} key={product.category} />);
            }

            rows.push(<ProductRow product={product} key={product.name} />)
        });

        return rows;
    }

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
                    {rows(products)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;


