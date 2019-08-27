import React, { Component } from "react";
import { Icon, CardPanel, Col } from "react-materialize";
import './style.css';

class Error extends Component {
    render () {
        return (
            <div className="errormsg">
                <CardPanel className="#ef5350 red lighten-1">
                    <span className="white-text">
                        <Icon className="error-icon" small>error</Icon> <span className="error-text">Invalid Search!</span>
                    </span>
                </CardPanel>
            </div>
        )
    }
}

export default Error;
