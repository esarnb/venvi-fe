import React from 'react';
// import Banner from '../components/Banner';
// import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import { MarketBuy, MarketSell } from '../components/MarketBtn';
import SearchInput from '../components/SearchInput';
import ListForm from '../components/ListForm';
import NavBar from '../components/NavBar';
import './index.css'



class Market extends React.Component {

state = {
  buyshow: false,
  showForm: false
}


handleSearch = () => {
  this.setState({buyshow: true})
console.log("here")
}

showForm = () => {
  this.setState({showForm: true})
  console.log("here2")
}

render () {
  return (
    <div>
    <NavBar/>
        {/* <Container> */}
        	<h3> Market </h3>
        	<span id="line"></span>
        <div id="marketbtn">
        <MarketBuy handleSearch={this.handleSearch}/>
        {this.state.buyshow ? <SearchInput /> : null}
        </div>
        <MarketSell showForm={this.showForm}/>
        {this.state.showForm ? <ListForm/>: null}
        {/* <div id="searchInput">
        <SearchInput/>
         </div>  */}
        {/* </Container> */}
    </div>
  );
}
}

export default Market;