import React from 'react';
import { MarketBuy, MarketSell } from '../components/MarketBtn';
import BuyForm from '../components/BuyForm';
import ListForm from '../components/ListForm';
import Footer from '../components/Footer';
import { ListingAPI, BookmarkAPI } from '../utils/API';
import ListCard from '../components/ListCard';
import Loader from 'react-loader-spinner';
import './index.css'


//Component
class Market extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
    buyshow: false,
    showForm: false,
    user:1,
    listings: [],
    userBookmarkList: [],
    searching:false,
    showResult:true
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
    this.userBookmark();
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


// Gets UserBookmarks
userBookmark = () =>
{
    BookmarkAPI.getBookmarkByUser(this.state.user).then(res=>{
      console.log("all bookmarks databack");
      var bookmarkList = res.data;
      if (!bookmarkList) {
        console.log("empty");
      }
      else {
        var bookmark = this.state.userBookmarkList.map(bookmark => { return bookmark.vin});
        this.setState({ userBookmarkList:res.data });
        console.log(this.state.userBookmarkList)
        this.setState({listings: this.state.listings.filter(x => bookmark.indexOf(x.vin) === -1)})
      }
    });
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
      this.setState({listings:res.data, showResult:true})
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

handleFavorite = (bookmarkData) => {
  console.log("works here")
    BookmarkAPI.addBookmark(bookmarkData).then(res=>
    this.setState({listings: this.state.listings.filter(x => x.vin !== res.data.vin)})
    )
  }

render () {
  return (
    <div>
        <div id = "wrapper">
        <h3 id="market-head"> Market </h3>
        <span id="market-line-market"></span>
        <div id="market-btn">
        <MarketBuy handleSearch={this.handleSearch}/>
        <MarketSell showForm={this.showForm}/>
        </div>
        {this.state.buyshow ? 
        <BuyForm infoBuy={this.getListingByVehicle} 
        startSearch={this.startSearch}
        finishSearch={this.finishSearch}/>  
        : null}
        {this.state.showForm ? <ListForm allListing={this.allListing}/>: null}
    <div id="market-list">
    {this.state.searching ? <Loader type="Oval" color="#d0b23e" height={60} width={60} /> : null}
    {this.state.showResult ? this.state.listings.map(item =>(
    <ListCard key={item.id}
      id={item.id}
      seller={item.UserId}
      image={item.image}
      make={item.make}
      model={item.model}
      price={item.price}
      mileage={item.mileage}
      year={item.year}
      vin={item.vin}
      user={this.state.user}
      handleFavorite={this.handleFavorite}
       /> 
  )):null}
  </div>
  </div>
    }
    <Footer />
    </div>
  );
}
}

export default Market;

// handleFavorite={this.handleFavorite}