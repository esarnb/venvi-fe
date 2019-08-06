import React from 'react';
import './App.css';


import { Test, Auth } from '../src/utils/API'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Market from './pages/Market';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends React.Component {

  state = {
    userid: undefined
  }

  componentDidMount() {
    //Testing CRUD Routes
    let id = 123;
    // Test.postQuery();
    // Test.getResponse();
    // Test.putQuery(id);
    // Test.deleteQuery(id);
    // UserAPI.getAllUsers();

    this.setState({userid: userid})
  }



  render() {
    return (
      <Router>
        <div>
          <NavBar userid={this.state.userid}/>
          <Switch>
            {/* <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/market' component={Market} /> 
            <Route path='/receive/:id' component={Auth} />*/}

            <Route exact path='/venvi-fe/' component={Home} />
            <Route exact path='/venvi-fe/search' component={Search} />
            <Route path='/venvi-fe/receive/:id/'component={(props) => this.setState({userid: props.match.params.id})} />
            
            {this.state.userid ? (
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

export default App;
