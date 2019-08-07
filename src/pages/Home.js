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
    props ? this.state = {
      userid: props.match.params.id
    } : this.state = {
      userid: undefined
    };      
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