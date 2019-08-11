import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import '../css/InputGroup.css';

const InputGroup = (props) => {
    const errorMessage = props.error;

    return (
        <div className="formGroup">
            <FormGroup>
                <Label for={props.id}  className={(errorMessage) ? "text-danger" : ""}>{props.labeltext}</Label>
                <Input {...props} placeholder={props.labeltext} className={(errorMessage) ? "text-danger form-control is-invalid" : ""}>
                    {props.children}
                </Input>
                {(errorMessage) ? <small className="text-danger">{errorMessage}</small> : ""}
            </FormGroup>
        </div>
    )
}

export default InputGroup;
