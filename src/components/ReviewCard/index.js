import React, { Component } from "react";
import { TextInput, Row, Col, Modal, Button } from "react-materialize";
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
                        <Modal trigger={<Button waves="light" id="reviewButton">
                                Add Review
                           </Button>}>
                            <h4>Add Review</h4>
                            <p>Add a form here</p>
                        </Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ReviewCard;