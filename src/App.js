import React from 'react';
import './App.css';
import API from '../src/utils/API'
import Home from './pages/home'
import Search from './pages/search'
import Profile from './pages/profile'
import Market from './pages/market';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends React.Component {

  componentDidMount() {
  let id = 123;
  API.postQuery();
  API.getResponse();
  API.putQuery(id);
  API.deleteQuery(id);
}



render () {
  return (
    <Router>
    <div>
    <NavBar/>
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
