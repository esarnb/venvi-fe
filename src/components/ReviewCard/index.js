import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import StarRatings from 'react-star-ratings';
import { ReviewAPI, VehicleAPI } from '../../utils/API'

import './style.css';
import Demo from "../Carousel/index";


class ReviewCard extends Component {
    state = {
        rating: 0,
        avgrate: 0,
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
        avgrate: 0,
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
        if (averageRating) {
        this.setState({
            avgrate: averageRating
        })}
        this.updateVehicleRating(averageRating);
    }

    updateVehicleRating = (rating) =>
    {
        var vehicleId = this.props.id;
         var vehicle =
            {
               avgrate: rating
            }
        console.log("vehicle id before update rating", vehicleId);


        VehicleAPI.updateVehicle(vehicleId, vehicle).then(res => {
        console.log(res.data);
    })
    }

    render() {
        
    const data = [
        {
          id: 1,
          title: `${this.props.year} ${this.props.make}`,
          subtitle: `${this.props.model}`,
          image:
            // eslint-disable-next-line max-len
            `${this.props.image}`,
        },
        {
          id: 2,
          title: '2019 Mercedes',
          subtitle: 'GLA 250',
          image:
            // eslint-disable-next-line max-len
            'https://crls.io/s/evox%2Fcolor_2400_032_png%2FMY2019%2F13164%2F13164_cc2400_032_696.png/feature/n/mercedes-benz-gla.png',
        },
        {
          id: 3,
          title: '2019 Lambo',
          subtitle: 'GLA 250',
          image:
            // eslint-disable-next-line max-len
            'https://i.dlpng.com/static/png/4309176_preview.png',
        },
      ];
        return (
            <div className="card" id="search-result">
            {/* <Demo data={data}/> */}
                <div className="card-image">
                    <img src={this.props.image} alt={this.props.make} />
                    <span className="card-title">{this.props.year} {this.props.make} {this.props.model}</span>
                </div>
                <div className="card-content">
                    <div className="avgrating"><b>Average Rating: </b>
                    <StarRatings
                        rating={this.state.avgrate}
                        starRatedColor="#ed9d1c"
                        numberOfStars={5}
                        name='avgrating'
                        starDimension='20px'
                    />
                    </div>
                    {this.state.reviews.map( (value, index) => {
                        return (
                            <div id={index}>
                            <hr />
                                <div><b>Rating: </b> 
                                <StarRatings
                                    rating={value.ratingNumber}
                                    starRatedColor="#ed9d1c"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='20px'
                                />
                                <br />
                                </div>
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