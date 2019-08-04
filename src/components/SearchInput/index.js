import React from "react";
import { TextInput, Row, Col } from "react-materialize"

function SearchInput() {

    return (
        <Row>
            <Col>
            <form>
                <Row>
                <Col className="input-field">
                    <TextInput id="make" type="text" label="Make" />                    
                </Col>
                <Col className="input-field">
                    <TextInput id="model" type="text" label="Model" />                    
                </Col>
                <Col className="input-field">
                    <TextInput id="year" type="text" label="Year" />                    
                </Col>
                </Row>
            </form>
            </Col>
        </Row>
    )
}

export default SearchInput;