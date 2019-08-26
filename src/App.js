import React from 'react';
import './App.css';
import { Test } from '../src/utils/API'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Market from './pages/Market';
import TestDrive from './pages/TestDrive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import AuthSuccess from './components/AuthSuccess';
// import Footer from './components/Footer';
// import { UserAPI } from './utils/API';

class App extends React.Component {

  state = {
    email: undefined,
    name: "Guest!",
    profileID: 1,
    profilePhoto: "https://media1.giphy.com/media/H4uE6w9G1uK4M/source.gif",
    username: undefined
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
    if (newStateValue && newStateValue.profileID) {
      console.log("\n\n\nNewStateValue: \n\n\n", newStateValue, "\n\n\n");
      this.setState({
        email: newStateValue.email,
        name: newStateValue.name,
        profileID: newStateValue.profileID,
        profilePhoto: newStateValue.profilePhoto,
        username: newStateValue.username
      });
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          {/* Look for a profile id, if so: look for a name, if so: use that name, else send false */}
          <NavBar userid={this.state.profileID ? this.state.profileID : false }/>
          <Switch>
          <Route exact path='/'  render={(props) => <Home {...props} changeUserState={this.changeUserState}/>}  />
            <Route exact path='/search' component={Search} />
            <Route exact path='/testdrive' component={TestDrive} /> 
            <Route path="/logged" component={AuthSuccess} />
                         
             {this.state.profileID ? (
               <React.Fragment>
                 <Route exact path='/profile' render={(props) => <Profile {...props} name={this.state.name} photo={this.state.profilePhoto}/> } />
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
