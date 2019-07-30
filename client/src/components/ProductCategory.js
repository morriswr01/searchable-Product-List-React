import React from 'react';

const ProductCategory = (props) => {
    const { category } = props;
    return (
        <tr>
            <th>
            {category}
            </th>
        </tr>
    )
}

export default ProductCategory
