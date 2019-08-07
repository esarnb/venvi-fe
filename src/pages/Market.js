import React from 'react';
import { MarketBuy, MarketSell } from '../components/MarketBtn';
import SearchInput from '../components/SearchInput';
import ListForm from '../components/ListForm';
import NavBar from '../components/NavBar';
import { ListingAPI } from '../utils/API';
import ListCard from '../components/ListCard';
import './index.css'


//Component
class Market extends React.Component {

state = {
  buyshow: false,
  showForm: false,
  listings: []
}

componentDidMount(){
  this.allListing();
}

//get all listing
allListing = () =>
{
    ListingAPI.getAllListing().then(res=>{
      console.log("all listings databack");
      console.log(res.data);
      // console.log(data.data[0]);
      this.setState({ listings: [...res.data] });
      console.log(this.state.listings)
    });
}


// getListingByVehicle = (make, model, year) =>
// {   
//     // var make = "TESLA";
//     // var model = "Model S";
//     // var year = "2018";

//     ListingAPI.getListingByVehicle(make, model, year);
// }

handleSearch = () => {
  this.setState({buyshow: true})
  this.setState({showForm:false})
console.log("here")
}

showForm = () => {
  this.setState({showForm: true})
    this.setState({buyshow:false})
  console.log("here2")
}

render () {
  const listing = this.state.listings.map(function(item){
    return <ListCard key={item.id}
      image={item.image}
      make={item.make}
      model={item.model}
      price={item.price}
      year={item.year}
      vin={item.vin} />
  })
  return (
    <div>
    <NavBar/>
        <h3 id="market-head"> Market </h3>
        <span id="market-line"></span>
        <div id="market-btn">
        <MarketBuy handleSearch={this.handleSearch}/>
        <MarketSell showForm={this.showForm}/>
        </div>
        {this.state.buyshow ? <SearchInput /> : null}
        {this.state.showForm ? <ListForm/>: null}
    <div>
    {this.state.listings.map(item =>(
    <ListCard key={item.id}
      image={item.image}
      make={item.make}
      model={item.model}
      price={item.price}
      year={item.year}
      vin={item.vin} />
  ))}
  </div>
    </div>
  );
}
}

export default Market;