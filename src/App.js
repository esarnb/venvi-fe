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

class App extends React.Component {

  state = {
    userid: 1,
  }

  componentDidMount() {
    //Testing CRUD Routes
    let id = 123;
    Test.postQuery();
    Test.getResponse();
    Test.putQuery(id);
    Test.deleteQuery(id);
  }

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
