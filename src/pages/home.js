import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import Divider from '../components/Divider';
import './index.css'


class Home extends React.Component {

render () {
  return (
    <div>

        <Banner />
            <Divider />
        <Container>
        	<h3> Top Consumer Picks </h3>
        	<span id="line"> </span>
        	<ButtonBases />
        </Container>
    </div>
  );
}
}

export default Home;