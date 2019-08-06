import React, { Component } from "react";
import { Textarea, Row, Col, Modal, Button } from "react-materialize";
import './style.css';

class ReviewCard extends Component {


    render() {
        return (
            <Row>
                <Col>
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
                </Col>
            </Row>
        )
    }
}

export default ReviewCard;