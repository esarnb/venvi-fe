import React from 'react';
import NavBar from '../components/NavBar';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput'
import './index.css'


class Search extends React.Component {

render () {
  return (
    <div>
        <NavBar/>
        <Container>
        	<h1> Top Consumer Picks </h1>
        	<span id="line"> </span>
        	<SearchInput />
        </Container>
    </div>
  );
}
}

export default Search;