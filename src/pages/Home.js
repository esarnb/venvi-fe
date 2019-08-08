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
    return (
      <div>
        { this.props.match.params.userid ? (
              <Redirect to="/venvi-fe/market" />
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