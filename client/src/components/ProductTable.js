import React from 'react';

// import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import "../css/ProductTable.css";

const ProductTable = (props) => {
    const { products, onDeletedProduct } = props;

    if (products.length === 0) {
        return (
            <div>
                <p>Must log in to view product database</p>
            </div>
        )
    }

    // Generate rows of react components from products array
    const rows = (products) => {
        let rows = []
        if (products === []) {
            return rows;
        }
        else {
            products.forEach(product => {
                rows.push(<ProductRow product={product} productID={product._id} key={product._id} onDeletedProduct={onDeletedProduct} />)
            });
            return rows;
        }
    }

    return (
        <div>
            <h2 className="tableTitle" >Product Table</h2>
            <table>
                <thead>
                    <tr>
                        <th className="tableHeader">Name</th>
                        <th className="tableHeader">Price</th>
                        <th className="tableHeader">Category</th>
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


