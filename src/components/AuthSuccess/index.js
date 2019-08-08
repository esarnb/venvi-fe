// AuthSuccess.js
import React, { Component } from 'react';

export default class AuthSuccess extends Component {
  componentDidMount() {
    const url = '/venvi-fe/';
    window.opener.open(url, '_self');
    window.opener.focus();
    window.opener.postMessage("popup-done", "*"); 
    window.close();
  }

  render() {
    return (
      <div>
        AUTH SUCCESS!
      </div>
    );
  }
}