import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import StarRatings from 'react-star-ratings';
import { ReviewAPI } from '../../utils/API'

import './style.css';


class ReviewCard extends Component {
    state = {
        rating: 0,
        textreview: ""
    }

    changeRating = newRating => {
        this.setState({
          rating: newRating
        });
        // this.props.ratingGet(this.state.rating)
      }

      handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
    }
    


    addReview = () =>
    {
        let VehicleId = this.props.id;
        let ratingNumber = this.state.rating;
        let review = this.state.textreview;

     var newReview =
            {
                VehicleId: VehicleId,
                ratingNumber: ratingNumber,
                review: review
            }

     console.log("newreview before send", newReview);

      ReviewAPI.addReview(newReview).then(result =>
    {
        console.log("saved review");
        console.log(result);

        //Get back review id
        console.log("saved review id");
        console.log(result.data.id);

        this.setState({
        rating: 0,
        textreview: ""
        })

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
                <Modal header="Add Review" fixedFooter trigger={<Button waves="light" className="reviewButton" onClick={this.getVehicleByType}>
                        Add Review
                    </Button>}
                    actions={<Button modal="close" className="reviewButton" onClick={this.addReview}>Submit Review</Button>}>
                        <div><b>Rating:	&nbsp;	&nbsp;	&nbsp;	&nbsp;</b>
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="#ed9d1c"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension='20px'
                        />
                        </div>
                        <Textarea placeholder="Type review here" value={this.state.textreview} name="textreview" onChange={this.handleChange}/>
                </Modal>
                </div>
            </div>
        )
    }
}

export default ReviewCard;