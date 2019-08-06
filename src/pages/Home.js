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
  render() {
    return (
      <div>
        <Banner />
        <Divider />
        <Container>
          <h3> Top Consumer Picks </h3>
          <span id="line"> </span>
          <ButtonBases />
          <Card />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;