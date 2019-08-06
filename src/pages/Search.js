import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import ReviewCard from '../components/ReviewCard'

import './index.css'

//Component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        make: null,
        model: null,
        year: null,
        imgURL: null
    };    
  }

  infoCallback = data => {
    console.log("Callback:")
    console.log(data)
  }

  render() {
    return (
      <div>
        <Container>
          <h2> Top Consumer Picks </h2>
          <span id="line"> </span>
          <SearchInput infoGet={this.infoCallback}/>
          <ReviewCard />
        </Container>
      </div>
    );
  }
}

export default Search;