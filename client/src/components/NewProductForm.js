import React from 'react';

import InputGroup from './InputGroup';
import { 
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export default function NewProductForm(props) {
    return (
        <div>
            <Form>
                <InputGroup
                    type="text"
                    labeltext="Name"
                    name="name"
                    id="productName"
                    onChange={props.onNewProductFormChange}
                />
                <InputGroup
                    type="number"
                    min="0.01"
                    labeltext="Price"
                    name="price"
                    id="productPrice"
                    onChange={props.onNewProductFormChange}
                />
                <InputGroup
                    type="select"
                    labeltext="Select Category"
                    name="category"
                    id="category"
                    onChange={props.onNewProductFormChange}
                >
                    {/* Options of the select dropdown */}
                    <option default value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                </InputGroup>
                <div className="formGroup" id="stockedFormGroup">
                    <FormGroup>
                        <Input
                            type="checkbox"
                            className="form-check-input"
                            id="stocked"
                            name="stocked"
                            onChange={props.onNewProductFormChange}
                        />
                        <Label className="form-check-label" for="stocked">In Stock</Label>
                    </FormGroup>
                </div>
            </Form>
        </div>
    )
}
