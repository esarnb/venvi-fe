import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container'


class Home extends React.Component {

render () {
  return (
    <div>
        <NavBar/>
        <Banner />
        <Container>
        	<ButtonBases />
        </Container>
    </div>
  );
}
}

export default Home;