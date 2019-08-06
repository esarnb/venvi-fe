import React from 'react';
import NavBar from '../components/NavBar';
import { MarketBuy, MarketSell } from '../components/MarketBtn';
import SearchInput from '../components/SearchInput';
import ListForm from '../components/ListForm';
import './index.css'



class Market extends React.Component {

state = {
  buyshow: false,
  showForm: false
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

render () {
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
    </div>
  );
}
}

export default Market;