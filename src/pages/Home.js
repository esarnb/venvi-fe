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
    vehicles: [],
    vehicles1:[],
    vehicles2:[],
    vehicles3:[]
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

        res.data[0].width = "33%";
        res.data[1].width = "34%";
        res.data[2].width = "33%";
        res.data[3].width = "34%";
        res.data[4].width = "32%";
        res.data[5].width = "34%";
        res.data[6].width = "33%";
        res.data[7].width = "34%";
        res.data[8].width = "33%";

        this.setState({ vehicles1: [res.data[0], res.data[1], res.data[2]]});
        this.setState({ vehicles2: [res.data[3], res.data[4], res.data[5]]});
        this.setState({ vehicles3: [res.data[6], res.data[7], res.data[8]]});
        console.log(this.state.vehicles);
        console.log("1", this.state.vehicles1);
        console.log("2", this.state.vehicles2);
        console.log("3", this.state.vehicles3);
      });
  }





  render() {
    return (
      <div>
        <Banner />
        <Container>
        <Divider />
          <h3> TOP CONSUMER PICKS </h3>
          <span id="line"> </span>
          <ButtonBases 
          handleInputChange={this.handleButtonClicked}
          vehicles = {this.state.vehicles}
          vehicles1 = {this.state.vehicles1}
          vehicles2 = {this.state.vehicles2}
          vehicles3 = {this.state.vehicles3}/>
        </Container>
        {/* <Card /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;