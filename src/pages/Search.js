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
    console.log("Callback:");
    console.log(`${data.year} + ${data.make} + ${data.model}`);
    this.setState({
      make: data.make,
      model: data.model,
      year: data.year,
      imgURL: data.imgURL
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h2> Top Consumer Picks </h2>
          <span id="line"> </span>
          <SearchInput infoGet={this.infoCallback}/>
          <ReviewCard image={this.state.imgURL} 
            make={this.state.make}
            model={this.state.model}
            year={this.state.year}
          />
        </Container>
      </div>
    );
  }
}

export default Search;