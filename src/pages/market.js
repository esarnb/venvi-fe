import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import MarketBtn from '../components/MarketBtn';
import './index.css'


class Market extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h3> Market </h3>
          <span id="line"></span>
          <MarketBtn />
        </Container>
      </div>
    );
  }
}

export default Market;