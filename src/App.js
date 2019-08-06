import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Test } from '../src/utils/API'
import Home from './pages/home'
import Search from './pages/search'
import Profile from './pages/profile'
import Market from './pages/market';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

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
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route path={process.env.PUBLIC_URL + '/search'} component={Search} />
            <Route path={process.env.PUBLIC_URL + '/profile'} component={Profile} />
            <Route path={process.env.PUBLIC_URL + '/market'} component={Market} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
