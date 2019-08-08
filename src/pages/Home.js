import React from 'react';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Redirect } from "react-router";
import './index.css'

//Component
class Home extends React.Component {
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