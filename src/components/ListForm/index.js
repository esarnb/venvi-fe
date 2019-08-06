import React, { Component } from "react";
import { TextInput, Row, Col, Button } from "react-materialize";
import axios from "axios";

class ListForm extends Component {

state = {
    vin: "",
    make:"",
    model:"",
    year:"",
    file:"",
}

searchAction() {
    console.log("Submit")

    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${this.state.vin}*BA?format=json`)
        .then(response => {
            var vin = response.data.Results[0];
            if(!vin.Model){
                alert ("You have entered an invalid VIN")
            }
            else {
            console.log("response data", vin)
            console.log("all response data", response.data.Results)
            console.log("year",vin.ModelYear);
            console.log("model", vin.Model);
            console.log("make", vin.Make);
            this.setState({make:vin.Make, model:vin.Model, year:vin.ModelYear})
            }
        })
}

handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
}

handleImageChange = event => {
    this.setState({file:event.target.files[0]});
    var image = this.state.file;
    console.log(image);
}

validate = () => {
    var carId = this.state.vin;
    var file = this.state.file;
    console.log("file", file)
    if (!carId || !file) {
        console.log("it works here")
        alert ("Please fill out required fields")
    }
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
                 <div class="uk-margin">
                    <div uk-form-custom>
                        <input id="file-input" onChange={this.handleImageChange} type="file"/>
                    </div>
                </div>
                <Row>
                    <Button onClick={this.validate} type="submit" className="#37474f blue-grey darken-3" waves="light" style={{marginLeft: '22px'}}>Make Listing</Button>
                </Row>

            </form>
            </Col>
        </Row>
    )
}
}

export default ListForm;