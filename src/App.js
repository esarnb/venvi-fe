import React from 'react';
import './App.css';
import { Test, Auth } from '../src/utils/API'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Market from './pages/Market';
import TestDrive from './pages/TestDrive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

import AuthSuccess from './components/AuthSuccess';
import Footer from './components/Footer';
import { UserAPI } from './utils/API';

class App extends React.Component {

  state = {

    userid: {
      email: "esarnb@gmail.com",
      name: "Esar",
      profileID: "110260281793715162152",
      profilePhoto: "'https://lh5.googleusercontent.com/-8mzPV8-3p14/AAAAAAAAAAI/AAAAAAAAABA/-zNF15CRyfk/photo.jpg",
      username: "esarnb"
    },

    // userid: undefined,
    email: "",
    name: "",
    profileID: "",
    profilePhoto: "",
    username: ""
  }

  componentDidMount() {
    //Testing CRUD Routes
    let id = 123;
    Test.postQuery();
    Test.getResponse();
    Test.putQuery(id);
    Test.deleteQuery(id);
  }

  // getUserByProfileId() {

  //   var profileID = this.state.profileID;
  //   UserAPI.getUser(profileID).then(result => {
  //       console.log("data", result);
  //       console.log(result.data);
  //       if (!result.data)
  //       {
  //         this.addUser();
  //       }
  //       else
  //       {
  //         this.setState({userid: result.data.id});
  //         console.log("state", this.state);                
  //       }
        
  //   }); 

  // }


  // addUser()
  // {
  //   let email = this.state.email;
  //   let name = this.state.name;
  //   let profileID = this.state.profileID;
  //   let profilePhoto = this.state.profilePhoto;
  //   let username = this.state.username;


  //    var newUser =
  //           {
  //               name: name,
  //               username: username,
  //               email: email,
  //               profilePhoto: profilePhoto,
  //               profileID: profileID
  //           }

  //     UserAPI.addUser(newUser).then(result =>
  //   {
  //       console.log("saved User");
  //       console.log(result);

  //       //Get back user id
  //       console.log("saved user id");
  //       console.log(result.data.id);
  //       var tempuserid = result.data.id;
  //       this.setState({userid: tempuserid});
  //       console.log("state", this.state);
    
  //   });

  // }

  

  changeUserState = (newStateValue) => {
    this.setState({userid: newStateValue});
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar username={this.state.userid ? this.state.userid.name ? this.state.userid.name : undefined : undefined }/>
          <Switch>
          <Route exact path='/'  render={(props) => <Home {...props} changeUserState={this.changeUserState}/>}  />
            <Route exact path='/search' component={Search} />
            <Route exact path='/testdrive' component={TestDrive} /> 
            <Route path="/logged" component={AuthSuccess} />
                         
             {this.state.userid ? (
               <React.Fragment>
                 <Route exact path='/profile' component={Profile} />
                 <Route exact path='/market' component={Market} /> 
               </React.Fragment>
             ) : <React.Fragment />} 
             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
