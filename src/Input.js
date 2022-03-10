import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Form, FormControl, FormLabel} from "react-bootstrap";

function Input(props) {
    return (
        <div>
            <Form className="text-center">
                <FormLabel>
                    {props.name}
                    <FormControl type="text" placeholder = "for example 9020,at" onChange={(e) => props.handleInput(e.target.value)}/>
                </FormLabel>
            </Form>
        </div>
    );
}

export default Input;