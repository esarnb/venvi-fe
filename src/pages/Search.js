import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import SearchInput from '../components/SearchInput';
import ReviewCard from '../components/ReviewCard/index';
import Footer from '../components/Footer';
import Loader from 'react-loader-spinner';
import Demo from '../components/Carousel';
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
        searching: false,
        failure: false
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
      searching: true,
      showReviewCard: false
    })
    console.log(this.state.start)
  }

  finishSearch = () => {
    this.setState({
      searching: false
    })
    console.log(this.state.start)
  }

  searchFail = () => {
    this.setState({
      failure: true,
      searching: false
    })
  }

  render() {
    return (
      <div>
        <div className = "wrapper2">
          <h2> Search Reviews </h2>
          <span id="line"> </span>
          <Demo/>
          <SearchInput infoGet={this.infoCallback}
            searchStart={this.startSearch}
            searchEnd={this.finishSearch}
            fail={this.searchFail}
            />
          <div className = "loader">
            {this.state.searching ? <Loader type="Oval" color="#d0b23e" height={60} width={60} /> : null}
          </div>
          {this.state.showReviewCard ? <ReviewCard image={this.state.imgURL} 
            make={this.state.make}
            model={this.state.model}
            year={this.state.year}
            id={this.state.vehicleId}
          /> : null}
          {this.state.failure ? <div id="failmsg">Invalid Search!</div> : null}
      </div>
        <Footer />
        </div>
    );
  }
}

export default Search;