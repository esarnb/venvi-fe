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

class App extends React.Component {

  state = {
    userid: 1,
    logged: false
  }

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
          <NavBar userid={this.state.userid}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/market' component={Market} /> 
            <Route exact path='/testdrive' component={TestDrive} /> 
            <Route path='/auth/google/success' component={Auth} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/*

  
  render() {
    return (
      <Router>
        <div>
          <NavBar logged={this.state.logged}/>
          <Switch>
            <Route exact path='/venvi-fe/' component={Home}/>
            <Route exact path='/venvi-fe/search' component={Search} />
            <Route path="/venvi-fe/auth/google/success" component={AuthSuccess} />
            {this.state.logged ? (
              <React.Fragment>
                <Route exact path='/venvi-fe/profile' component={Profile} />
                <Route exact path='/venvi-fe/market' component={Market} /> 
              </React.Fragment>
            ) : <React.Fragment />} 
        
          </Switch>
        </div>
      </Router>
    );
  }
}

*/

export default App;
