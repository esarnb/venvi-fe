import React, { Component } from "react";
import { TextInput, Row, Col } from "react-materialize";
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
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.
                            </p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ReviewCard;