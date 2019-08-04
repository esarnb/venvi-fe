import React from "react";
import { TextInput, Row, Col, Button } from "react-materialize"

function SearchInput() {

    return (
        <Row>
            <Col>
            <form>
                <Row style={{marginBottom: '0px'}}>
                <Col className="input-field">
                    <TextInput id="make" type="text" label="Make" />                    
                </Col>
                <Col className="input-field">
                    <TextInput id="model" type="text" label="Model" />                    
                </Col>
                <Col className="input-field">
                    <TextInput id="year" type="text" label="Year"   />                    
                </Col>
                </Row>
                <Row>
                    <Button id="searchButton" className="#37474f blue-grey darken-3" waves="light" style={{marginLeft: '22px'}}>Search</Button>
                </Row>
            </form>
            </Col>
        </Row>
    )
}

export default SearchInput;