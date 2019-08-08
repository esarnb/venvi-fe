import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import StarRatings from 'react-star-ratings';
import { ReviewAPI, VehicleAPI } from '../../utils/API'

import './style.css';


class ReviewCard extends Component {
    state = {
        rating: 0,
        textreview: "",
        reviews: []
    }

    componentDidMount() {
        this.getReviewByVehicleId();
    }

    changeRating = newRating => {
        this.setState({
          rating: newRating
        });
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
        });
        this.getReviewByVehicleId();

    });

}



    getReviewByVehicleId = () =>
    {
      console.log("inside review call");
      var id = this.props.id;
      console.log("vehicle id", id);

      ReviewAPI.getReviewByVehicle(id).then(result => {
      console.log("all reviews databack");
      console.log(result.data);
      this.setState({reviews: result.data});
      console.log("reviews in state", this.state.reviews);
      this.getAverageRating(result.data);           
    });

    }


    //calculate averate rating after add review
    getAverageRating = (arr) =>
    {
        var sum = 0;
        var averageRating;
        if(!arr)
        {
            averageRating = 0;
        }
        else
        {
            for (var i = 0; i < arr.length; i ++)
            {
                sum += arr[i].ratingNumber;
            }
                averageRating = sum/arr.length;
        }       
        console.log(averageRating);
        this.updateVehicleRating(averageRating);
    }

    updateVehicleRating = (rating) =>
    {
        var vehicleId = this.props.id;
         var vehicle =
            {
               rating: rating
            }
        console.log("vehicle id before update rating", vehicleId);


        VehicleAPI.updateVehicle(vehicleId, vehicle).then(res => {
        console.log(res.data);
    })
    }


    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image} />
                    <span className="card-title">{this.props.year} {this.props.make} {this.props.model}</span>
                </div>
                <div className="card-content">
                    {this.state.reviews.map( (value, index) => {
                        return (
                            <div id={index}>
                                <div><b>Rating: {value.ratingNumber}/5</b></div>
                                <div>{value.review}</div>
                                <br />
                            </div>
                        )
                    })}
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