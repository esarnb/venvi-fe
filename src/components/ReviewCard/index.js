import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import './style.css';
import { VehicleAPI } from '../../utils/API'

class ReviewCard extends Component {



//Check if there is an existing type in vehicle database
getVehicleByType = (make, model, year) =>
{
    VehicleAPI.getVehicleByType(make, model, year).then(function(data){
        console.log(" data", data);
    });
        
 
}

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image} />
                    <span className="card-title">{this.props.year} {this.props.make} {this.props.model}</span>
                </div>
                <div className="card-content">
                    {/* put reviews here */}
                </div>
                <div className="card-action">
                <Modal header="Add Review" fixedFooter trigger={<Button waves="light" className="reviewButton">
                        Add Review
                    </Button>}
                    actions={<Button modal="close" className="reviewButton">Submit Review</Button>}>
                        <Textarea placeholder="Type review here"/>
                </Modal>
                </div>
            </div>
        )
    }
}

export default ReviewCard;