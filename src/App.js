import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Test, UserAPI, ListingAPI, BookmarkAPI, VehicleAPI, ReviewAPI} from '../src/utils/API'
import Home from './pages/home'
import Search from './pages/search'
import Profile from './pages/profile'
import Market from './pages/market';
import { Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import createHistory from "history/createBrowserHistory";

class App extends React.Component {

  componentDidMount() {
    //Testing CRUD Routes
    let id = 123;
    Test.postQuery();
    Test.getResponse();
    Test.putQuery(id);
    Test.deleteQuery(id);
  }

  render() {
    return (
      <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/search' component={Search} /> 
            <Route exact path='/profile' component={Profile} /> 
            <Route exact path='/market' component={Market} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
