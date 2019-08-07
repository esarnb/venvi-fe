import React from 'react';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './index.css'

//Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userid: props.userid
    }

  }

  componentDidMount() {
    let localID = localStorage.getItem("venvi-user")
    let urlID = this.props.match.params.id;
    let stateID = this.state.userid;

    if (localID == "undefined") localStorage.removeItem("venvi-user")
    else if(!localID && !urlID) {
      //You need to sign in.
      console.log("YOU NEED TO SIGN IN");
      
    } 
    else if (!localID && urlID) {
      console.log("SETTING NEW USER");

      localStorage.setItem("venvi-user", urlID);
      this.setState({userid: urlID}) 
      this.props.history.push('/venvi-fe/')
    }
    else if (urlID != "undefined" && (localID != urlID) ) {
      console.log("CHANGING USER");

      localStorage.setItem("venvi-user", urlID);
      this.setState({userid: urlID}) 
      this.props.history.push('/venvi-fe/')


      
    }
    else if (localID && !stateID) {
      console.log("SETTING NEW STATE OLD USER");

      this.setState({userid: urlID}) 
    }


















    // /*
    //   If there is no signed in localStorage, or, 
    //   you signed in just now, then add new userid to localstorage
    // */
    // if (!localID && this.props.match.params.id) {
    //   let newID = this.props.match.params.id;
    //   console.log("USERID: ", newID);
    //   console.log("URL: ", this.props.location.pathname);
    //   localStorage.setItem("venvi-user", newID);
    //   this.setState({userid: newID}) 
    //   this.props.history.push('/venvi-fe/')
    // }
    // /*
    //   If you're signed in, but react didnt sign you in,
    //   then add new userid to react
    // */
    // else if (localID && !this.state.userid) {
    //    this.setState({userid: localID}) 
    // }

    //Else, you need to sign in and hit receive:id route.
  }

  render() {
    return (
      <div>
        <Banner />
        <Divider />
        <Container>
          <h3> Top Consumer Picks </h3>
          <span id="line"> </span>
          {this.state.userid ? <div>Logged In with id: {this.state.userid} </div> : <div>Not Logged In</div> }
          <ButtonBases />
      
        </Container>
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;