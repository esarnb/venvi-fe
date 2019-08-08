import React from 'react';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import { Redirect } from "react-router";
import './index.css'
import Cookies from "js-cookie";

//Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: undefined,
    };
  }

  componentDidMount() {
    //If the user wants to sign in, create a cookie and update state
    if (this.props.location.search) this.setCookie(this.props.location.search);
    //If the user visits home, check if there is a cookie (signed-in), and update state
    else {
      this.newReactState();
    }
    //If there is no sign in, and no cookie, then the user is undefined and are signed out.
  }

  //Finds cookie from Front-End and returns as user-obj.
  findCookie = () => {
    let userobj = Cookies.get("venvi")
    userobj ? userobj = this.QueryStringToJSON(userobj) : userobj = undefined;
    return userobj;
  }

  //Sets the cookie as queryParameters of sign-in.
  setCookie = (signIn) => {
    //Set cookie
    Cookies.set("venvi", signIn);
    //Update React
    this.newReactState();
  }

  newReactState = () => {
    let findKey = this.findCookie();
    console.log("THE FINDKEY VAR", findKey);
    this.props.changeUserState(findKey);
  }

  //Converts all queryParams into useable object.
  QueryStringToJSON = () => {            
    var pairs = window.location.search.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
  }

  render() {
    console.log("MATCH QUERY", this.props.match.params.userid);
    console.log("LOCATION QUERY", this.props.location.query);
    console.log("LOCATION SEARCH", this.props.location.search);
    return (
      <div>
        { this.props.location.search ? (
              <Redirect to="/logged" />
        ) : (
          <React.Fragment>
            <Banner />
            <Container>
            <Divider />
              <h3> Top Consumer Picks </h3>
              <span id="line"> </span>
              <ButtonBases />
            </Container>
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;