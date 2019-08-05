import React from 'react';
// import NavBar from '../components/NavBar';
// import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import './index.css'


class Search extends React.Component {

render () {
  return (
    <div>

        <Container>
        	<h2> Top Consumr Picks </h2>
        	<span id="line"> </span>
        	<ButtonBases />
        </Container>
    </div>
  );
}
}

export default Search;