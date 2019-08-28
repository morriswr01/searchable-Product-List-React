import React from 'react';

// CSS
import "../css/ProductRow.css";

const ProductRow = (props) => {
    const { name, price, stocked, category } = props.product;
    const { productID, onDeletedProduct } = props

    return (
        <tr>
            <td className={!stocked ? "red" : ""}>{name}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>
                <button type="button" className="close" aria-label="Close" onClick={onDeletedProduct.bind(this, productID)}>
                    <span aria-hidden="true" className="deleteProductButton">&times;</span>
                </button>
            </td>
        </tr>
    )
}

export default ProductRow
