import React, { Component } from "react";
import { Textarea, Modal, Button } from "react-materialize";
import StarRatings from 'react-star-ratings';

import './style.css';

class ReviewCard extends Component {
    state = {
        rating: 0
    }

    changeRating = newRating => {
        this.setState({
          rating: newRating
        });
        // this.props.ratingGet(this.state.rating)
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
                        <Textarea placeholder="Type review here"/>
                </Modal>
                </div>
            </div>
        )
    }
}

export default ReviewCard;