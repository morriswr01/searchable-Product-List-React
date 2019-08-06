import React from 'react';
import "../css/ProductRow.css";

const ProductRow = (props) => {
    const {name, price, stocked, category} = props.product;
    return (
        <tr>
            <td className={!stocked ? "red" : ""}>{name}</td>
            <td>{price}</td>
            <td>{category}</td>
        </tr>
    )
}

export default ProductRow
