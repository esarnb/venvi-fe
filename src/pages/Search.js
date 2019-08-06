import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput'
import './index.css'

//Component
class Search extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h2> Top Consumer Picks </h2>
          <span id="line"> </span>
          <SearchInput />
        </Container>
      </div>
    );
  }
}

export default Search;