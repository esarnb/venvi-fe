import React, { Component } from "react";
import { TextInput, Row, Col, Button } from "react-materialize";
import axios from "axios";

// function SearchInput() {
class ListForm extends Component {

state = {
    vin: "",
    make:"",
    model:"",
    year:"",
}

searchAction() {
    console.log("Submit")

    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${this.state.vin}*BA?format=json`)
        .then(response => {
            console.log("response", response.data.Results);
            var vin = response.data.Results[0];
            console.log("year",vin.ModelYear);
            console.log("model", vin.Model);
            console.log("make", vin.Make);
            this.setState({make:vin.Make, model:vin.Model, year:vin.ModelYear})
        })
}

handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
}

render () {
    return (
        <Row className = "searchInput">
            <Col>
            <form onSubmit={e => {
                e.preventDefault();
                this.searchAction();
            }}>
                <Row style={{marginBottom: '0px'}}>
                <Col className="input-field">
                    <TextInput name="vin" value={this.state.vin} onChange={this.handleChange} type="text" label="Vin" />                    
                </Col>
                <Col className="input-field">
                    <TextInput name="make" value={this.state.make} onChange={this.handleChange} type="text" label="Make"  disabled={true}/>                    
                </Col>
                <Col className="input-field">
                    <TextInput name="model" value={this.state.model} onChange={this.handleChange} type="text" label="Model" disabled={true} />                    
                </Col>
                <Col className="input-field">
                    <TextInput name="year" value={this.state.year} onChange={this.handleChange} type="text" label="Year" disabled={true} />                    
                </Col>
                </Row>
                {/* <Row>    
                <input
                accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                />
                <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" className={classes.button}>
                    Upload
                </Button>
                </label> 
                </Row> */}
                <Row>
                    <Button type="submit" className="#37474f blue-grey darken-3" waves="light" style={{marginLeft: '22px'}}>Search</Button>
                </Row>

            </form>
            </Col>
        </Row>
    )
}
}

export default ListForm;