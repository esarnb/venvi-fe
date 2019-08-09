import React from 'react';
import { MarketBuy, MarketSell } from '../components/MarketBtn';
import BuyForm from '../components/BuyForm';
import ListForm from '../components/ListForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ListingAPI, BookmarkAPI } from '../utils/API';
import ListCard from '../components/ListCard';
import Container from '../components/Container';
import Card from '../components/Card';
import './index.css'


//Component
class Market extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
    buyshow: false,
    showForm: false,
    listings: []
  };
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

editListing = () =>
{
   
     let price = 20;
     let id = 10
     var listing =
            {
                price: price,
            }
     ListingAPI.editListing(id, listing).then(res => {
      console.log(res.data);
    })
}

// Search for a specific car
getListingByVehicle = (data) =>
{   
  console.log("data passed");
  console.log(`${data.year} + ${data.make} + ${data.model}`)
    let make = data.make;
    let model = data.model;
    let year = data.year;
    ListingAPI.getListingByVehicle(make, model, year).then(res=>{
      console.log(res.data);
      this.setState({listings:res.data})
    });
}

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

// handleFavorite = (ids) => {
//   BookmarkAPI.addBookmark().then(res=>{
//     console.log("hello", res.data)
//     this.state.listings.filter(function(listing) {
//       return 
//     });
//   })
// }

render () {
  return (
    <div>
        <div id = "wrapper">
        <h3 id="market-head"> Market </h3>
        <span id="market-line"></span>
        <div id="market-btn">
        <MarketBuy handleSearch={this.handleSearch}/>
        <MarketSell showForm={this.showForm}/>
        </div>
        {this.state.buyshow ? <BuyForm infoBuy={this.getListingByVehicle}/> : null}
        {this.state.showForm ? <ListForm/>: null}
    <div id="market-list">
    {this.state.listings.map(item =>(
    <ListCard key={item.id}
      id={item.id}
      user={item.UserId}
      image={item.image}
      make={item.make}
      model={item.model}
      price={item.price}
      year={item.year}
      vin={item.vin}
       />
  ))}
  </div>
  </div>
    <Footer />
    </div>
  );
}
}

export default Market;

// handleFavorite={this.handleFavorite}