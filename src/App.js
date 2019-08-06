import React from 'react';
import './App.css';


import { Test } from '../src/utils/API'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Market from './pages/Market';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends React.Component {

  componentDidMount() {
    //Testing CRUD Routes
    let id = 123;
    // Test.postQuery();
    // Test.getResponse();
    // Test.putQuery(id);
    // Test.deleteQuery(id);
    // UserAPI.getAllUsers();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            {/* <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/market' component={Market} /> 
            <Route path='/receive/:id' component={Auth} />*/}

            <Route exact path='/venvi-fe/' component={Home} />
            <Route exact path='/venvi-fe/search' component={Search} />
            <Route exact path='/venvi-fe/profile' component={Profile} />
            <Route exact path='/venvi-fe/market' component={Market} /> 
            <Route path='/venvi-fe/receive/:id' component={Auth} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
