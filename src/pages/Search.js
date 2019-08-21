import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import SearchInput from '../components/SearchInput';
import ReviewCard from '../components/ReviewCard/index';
import Footer from '../components/Footer';
import Loader from 'react-loader-spinner';

import './index.css'

//Component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        make: null,
        model: null,
        year: null,
        imgURL: null,
        vehicleId: null,
        showReviewCard: false,
        reviews: [],
        searching: false
    };    
  }

  

  infoCallback = data => {
    console.log("Callback:");
    console.log(`${data.year} + ${data.make} + ${data.model}`);
    console.log(data.reviews)
    this.setState({
      make: data.make,
      model: data.model,
      year: data.year,
      imgURL: data.imgURL,
      vehicleId: data.vehicleId,
      showReviewCard: true
    })
    console.log(this.state.reviews)
  } 

  startSearch = () => {
    this.setState({
      searching: true
    })
    console.log(this.state.start)
  }

  finishSearch = () => {
    this.setState({
      searching: false
    })
    console.log(this.state.start)
  }

  render() {
    return (
      <div>
        <div className = "wrapper2">
          <h2> Search Reviews </h2>
          <span id="line"> </span>
          <SearchInput infoGet={this.infoCallback}
            searchStart={this.startSearch}
            searchEnd={this.finishSearch}
            />
          {this.state.searching ? <Loader type="Oval" color="#d0b23e" height={60} width={60} /> : null}
          {this.state.showReviewCard ? <ReviewCard image={this.state.imgURL} 
            make={this.state.make}
            model={this.state.model}
            year={this.state.year}
            id={this.state.vehicleId}
            // relay={this.state.relay}
          /> : null}       
      </div>
        <Footer />
        </div>
    );
  }
}

export default Search;