import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

// CSS
import '../css/InputGroup.css';

const InputGroup = (props) => {
    // Get error message
    const errorMessage = props.error;

    return (
        <div className="formGroup">
            <FormGroup>
                <Label 
                    for={props.id}  
                    className={(errorMessage) ? "text-danger" : ""}>
                        {props.labeltext}
                </Label>
                <Input 
                    {...props}
                    placeholder= {props.labeltext}
                    className= {(errorMessage) ? "text-danger form-control is-invalid" : ""}>
                    {props.children}
                </Input>
            </FormGroup>
        </div>
    )
}

export default InputGroup;
