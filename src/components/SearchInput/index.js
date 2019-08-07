import React, { Component } from "react";
import { TextInput, Row, Col, Button } from "react-materialize";
import axios from "axios";
import { VehicleAPI } from '../../utils/API'
import "./style.css"

// function SearchInput() {
class SearchInput extends Component {
	state = {
		make: "",
		model: "",
		year: "",
		imgURL: "",
		vehicleId: ""
	}



	searchAction = () => {
		console.log("Submit")
		var makeVeri = false;
		var modelVeri = false;

		axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
			.then(response => {
				var allMakes = response.data.Results;
				var queryMake = null;
				if (this.state.make != "") {
					queryMake = this.state.make.toLowerCase().trim();
				}

				console.log(queryMake);

				
				allMakes.forEach(value => {
					if (value.MakeName.toLowerCase().indexOf(queryMake) > -1) {
						console.log("Make match!")
						makeVeri = true;
					}
				})

				if (makeVeri) {
				axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${queryMake}/vehicleType/car?format=json`)
					.then(response => {
						var carModels = response.data.Results;
						axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${queryMake}/vehicleType/truck?format=json`)
							.then(resp => {
								var truckModels = resp.data.Results;
								var allModels = carModels.concat(truckModels);
								console.log(allModels);
								var queryModel = this.state.model.toLowerCase().trim();
								console.log(queryModel);

								allModels.forEach(value => {
									if (value.Model_Name.toLowerCase().indexOf(queryModel) > -1) {
										console.log("Model match!")
										modelVeri = true;

									}
								})



								var year = "";
								console.log(this.state.year.trim());
								if (Number.parseInt(this.state.year.trim())) {
									year = Number.parseInt(this.state.year.trim());
									if (year === "") {
										year = 2019;
									}
								}
								if (year === "") {
									year = 2019;
								}							
								console.log(year);


								if (makeVeri && modelVeri) {
									console.log("All input OK.")
									
									console.log(`https://www.googleapis.com/customsearch/v1?q=${year} ${queryMake}+${queryModel}&cx=014855097092208085078%3A6cwyf6e5-oc&searchType=image&fileType=png&key=AIzaSyBEg43tCIEFbmsUD3hVAMZtNOFGcj7M0Cs`)
									axios.get(`https://www.googleapis.com/customsearch/v1?q=${year} ${queryMake}+${queryModel}&cx=014855097092208085078%3A6cwyf6e5-oc&searchType=image&fileType=png&key=AIzaSyBEg43tCIEFbmsUD3hVAMZtNOFGcj7M0Cs`)
										.then(response => {
											var images = response.data.items[0].link;

											this.state.imgURL = images;
											// console.log(this.state)

											this.getVehicleByType(year);
											
										
										})

								}
								else {
									console.log("Error.")
								}


							})
					})
				}
	else {
		console.log("Make not match.")
	}})
}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}


	//Check if there is an existing type in vehicle database
getVehicleByType = (year) =>
{
	var make = this.state.make.toLowerCase().trim();
	var model = this.state.model.toLowerCase().trim();
    VehicleAPI.getVehicleByType(make, model, year).then( result => {
        console.log(" data", result);
        console.log(result.data[0]);
        if (!result.data[0])
        {
        	this.addVehicle(year);
        }
        else
        {
        	this.setState({vehicleId: result.data[0].id});
        	console.log(this.state.vehicleId); 
	        console.log("state", this.state);
	        this.props.infoGet(this.state);         
        }

    }); 
}


addVehicle = (year) =>
{

    let make = this.state.make;
    let model = this.state.model;

    let image = this.state.imgURL;

     var vehicle =
            {
                make: make,
                model: model,
                year: year,
                image: image,
            }
     console.log("vehicle before send", vehicle);

	VehicleAPI.addVehicle(vehicle).then(result =>
    {
        console.log("saved vehicle");
        console.log(result);

        //Get back vehicle id
        console.log("saved vehicle id");
        console.log(result.data.id);
        var tempvehicleid = result.data.id;
        var tempvehicleyear = result.data.year;

        this.setState({vehicleId: tempvehicleid});
        this.setState({year: tempvehicleyear});
        
        console.log(this.state.vehicleId);
        console.log("state", this.state);
        this.props.infoGet(this.state);  
    });

}


	render() {
		return (
			<form onSubmit={e => {
				e.preventDefault();
				this.searchAction();
			}}>
				<Row style={{ marginBottom: '0px' }}>
					<Col className="input-field">
						<TextInput name="make" value={this.state.make} onChange={this.handleChange} type="text" label="Make" />
					</Col>
					<Col className="input-field">
						<TextInput name="model" value={this.state.model} onChange={this.handleChange} type="text" label="Model" />
					</Col>
					<Col className="input-field">
						<TextInput name="year" value={this.state.year} onChange={this.handleChange} type="text" label="Year" />
					</Col>
				</Row>
				<Row>
					<Button type="submit" className="#37474f blue-grey darken-3" waves="light" style={{ marginLeft: '22px' }}>Search</Button>
				</Row>
			</form>
		)
	}
}

export default SearchInput;