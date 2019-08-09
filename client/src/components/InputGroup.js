import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputGroup = (props) => {
    return (
        <div className="formGroup">
            <FormGroup>
                <Label for={props.id}>{props.labeltext}</Label>
                <Input {...props} placeholder={props.labeltext}>
                    {props.children}
                </Input>
            </FormGroup>
        </div>
    )
}

export default InputGroup;
