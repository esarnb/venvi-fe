import React from 'react';
import Banner from '../components/Banner';
import ButtonBases from '../components/ButtonBases';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { VehicleAPI } from '../utils/API';
import './index.css'

//Component
class Home extends React.Component {


  state = {
    key: "",
    vehicles: []
  }

   componentDidMount() {
    //Testing CRUD Routes
    // let id = 123;
    // Test.postQuery();
    // Test.getResponse();
    // Test.putQuery(id);
    // Test.deleteQuery(id);
    this.allVehicles();
  }


 handleButtonClicked = event => {
  console.log("value", event.currentTarget.value);
  var key = event.currentTarget.value;
  this.setState({ key: key});
  this.componentDidUpdate = (prevState) => {
   if (this.state.key !== prevState.key) {
    this.afterClick()
   }
  }
 };

  afterClick = () => {
    console.log("key", this.state.key)
  }


  //get all vehicles
  allVehicles = () =>
  {
      VehicleAPI.getAllVehicles().then(res=>{
        console.log("all vehicles databack");
        console.log(res.data);
        // console.log(data.data[0]);
        this.setState({ vehicles: [...res.data] });
        console.log(this.state.vehicles)
      });
  }





  render() {
    return (
      <div>
        <Banner />
        <Container>
        <Divider />
          <h3> Top Consumer Picks </h3>
          <span id="line"> </span>
          <ButtonBases 
          handleInputChange={this.handleButtonClicked}/>
        </Container>
        {/* <Card /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;