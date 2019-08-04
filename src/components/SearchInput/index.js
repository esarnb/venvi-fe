import React, { Component } from "react";
import { TextInput, Row, Col, Button } from "react-materialize";
import axios from "axios";

// function SearchInput() {
class SearchInput extends Component {

state = {
    make: "",
    model: "",
    year: ""
}

searchAction() {
    console.log("Submit")
    // var makeVeri = false;
    // var modelVeri = false;

    axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
        .then(response => {
            var allMakes = response.data.Results;
            var queryMake = this.state.make.toLowerCase();

            console.log(queryMake);

            allMakes.map(value => {
                if(value.MakeName.toLowerCase().indexOf(queryMake) > -1) {
                    console.log("Make match!")
                    // makeVeri = true;
                }
            })

            axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${this.state.make}/vehicleType/car?format=json`)
                .then(response => {
                    var carModels = response.data.Results;
                    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${this.state.make}/vehicleType/truck?format=json`)
                        .then(resp => {
                            var truckModels = resp.data.Results;
                            var allModels = carModels.concat(truckModels);
                            console.log(allModels);
                            var queryModel = this.state.model.toLowerCase();
                            console.log(queryModel);

                            allModels.map(value => {
                                if(value.Model_Name.toLowerCase().indexOf(queryModel) > -1) {
                                    console.log("Model match!")
                                    // modelVeri = true;
                                }
                            })
                        })
                })

        })
}

handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
}

render () {
    return (
        <Row>
            <Col>
            <form onSubmit={e => {
                e.preventDefault();
                this.searchAction();
            }}>
                <Row style={{marginBottom: '0px'}}>
                <Col className="input-field">
                    <TextInput name="make" value={this.state.make} onChange={this.handleChange} type="text" label="Make" />                    
                </Col>
                <Col className="input-field">
                    <TextInput name="model" value={this.state.model} onChange={this.handleChange} type="text" label="Model" />                    
                </Col>
                <Col className="input-field">
                    <TextInput name="year" type="text" label="Year" />                    
                </Col>
                </Row>
                <Row>
                    <Button type="submit" className="#37474f blue-grey darken-3" waves="light" style={{marginLeft: '22px'}}>Search</Button>
                </Row>
            </form>
            </Col>
        </Row>
    )
}
}

export default SearchInput;