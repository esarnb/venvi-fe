import React from 'react';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import down from './down.png';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Popcard from '../components/Popcard';
import { Redirect } from "react-router";
import { VehicleAPI } from '../utils/API';
import './index.css'
import Cookies from "js-cookie";

//Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      vehicles: [],
      vehicles1:[],
      vehicles2:[],
      vehicles3:[],
      pop1: "1",
      pop2: "2",
      pop3: "3",
      pop4: "4"
    }
  }

  componentDidMount() {
    this.allVehicles();
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
  QueryStringToJSON = (convertThis) => {            
    var pairs = convertThis.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
  }

 handleButtonClicked = event => {
  console.log("value", event.currentTarget.value);
  var key = event.currentTarget.value;
  this.setState({ key: key});
  this.componentDidUpdate = (prevState) => {
   if (this.state.key !== prevState.key) {
    this.afterClick()
   }
  }
 };

  afterClick = () => {
    console.log("key", this.state.key)
  }


  //get all vehicles
  allVehicles = () =>
  {
      VehicleAPI.getAllVehicles().then(res=>{
        console.log("all vehicles databack");
        console.log(res.data);
        var phillip = res.data;

        // this.setState({ vehicles: phillip});
        this.setState({vehicles: [ ...this.state.vehicles, phillip ]})

        // res.data[0].width = "33%";
        // res.data[1].width = "34%";
        // res.data[2].width = "33%";
        // res.data[3].width = "34%";
        // res.data[4].width = "32%";
        // res.data[5].width = "34%";
        // res.data[6].width = "33%";
        // res.data[7].width = "34%";
        // res.data[8].width = "33%";

        // this.setState({ vehicles1: [res.data[0], res.data[1], res.data[2]]});
        // this.setState({ vehicles2: [res.data[3], res.data[4], res.data[5]]});
        // this.setState({ vehicles3: [res.data[6], res.data[7], res.data[8]]});



        console.log(this.state.vehicles);
        console.log(this.state.vehicles[0]);
        // console.log("1", this.state.vehicles1);
        // console.log("2", this.state.vehicles2);
        // console.log("3", this.state.vehicles3);

      });
  }

  render() {
    console.log("MATCH QUERY", this.props.match.params.userid);
    console.log("LOCATION QUERY", this.props.location.query);
    console.log("LOCATION SEARCH", this.props.location.search);
    return (
      <React.Fragment>
        { this.props.location.search ? (
              <Redirect to="/logged" />
        ) : (
          <React.Fragment>
            <Banner />
             <a href="#next">
                <div id="iconContainer">
                  <img src={down} alt="down" />
                </div>
              </a>
            <div id="next">
            </div>
              <h3 id="toppick"> TOP 10 CONSUMER PICKS </h3>
              <span id="homeline"> </span>

  
            {(this.state.vehicles[0]) ? <Popcard number="1" pop={this.state.vehicles}/> : null}
            {(this.state.vehicles[0]) ? <Popcard number="2" pop={this.state.vehicles}/> : null}
            {(this.state.vehicles[0]) ? <Popcard number="3" pop={this.state.vehicles}/> : null}
            {(this.state.vehicles[0]) ? <Popcard number="4" pop={this.state.vehicles}/> : null}


            <Footer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Home;