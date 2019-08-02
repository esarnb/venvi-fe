import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../src/utils/API'
import Home from './pages'
import Search from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
    <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/search' component={Search} /> 
    </Switch>    
    </Router>
  );
}
}

export default App;
