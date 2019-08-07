import React from 'react';
import './App.css';


import * as API from '../src/utils/API'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import Market from './pages/Market';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends React.Component {

  state = {
    // userid: 1
    userid: undefined,
    logged: false,
    userObj: undefined
  }

  componentDidMount() {
    let id = 123;
    API.Test.postQuery();
    API.Test.getResponse();
    API.Test.putQuery(id);
    API.Test.deleteQuery(id);

    console.log("CURRENT STATE", this.state);
    
    
  }

  componentWillMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    API.Auth.checkAuth().then(res => {
      console.log("APP JS CHECKAUTH RES", res);
      
      this.setState({ logged: res.data })
    }).catch(err => console.log("err", err));
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar userid={this.state.userid} userData={this.state.userObj}/>
          <Switch>
            <Route exact path='/venvi-fe/' component={Home}/>
            <Route exact path='/venvi-fe/search' component={Search} />
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

    // <Route exact path='/venvi-fe/' component={Home} />




// To test locally 
            // <Route exact path='/' component={Home} />
            // <Route exact path='/search' component={Search} />
            // <Route exact path='/profile' component={Profile} />
            // <Route exact path='/market' component={Market} /> 
            // <Route path='/receive/:id' component={Auth} />



 // Change back to this before push to master   
            // <Route exact path='/venvi-fe/search' component={Search} />
            // <Route path='/venvi-fe/receive/:id/'component={(props) => this.setState({userid: props.match.params.id})} />
            
            // {this.state.userid ? (
            //   <React.Fragment>
            //     <Route exact path='/venvi-fe/profile' component={Profile} />
            //     <Route exact path='/venvi-fe/market' component={Market} /> 
            //   </React.Fragment>
            // ) : <React.Fragment />} 

           // <Route path='/receive/:id' component={Auth} />

            // <Route exact path='/venvi-fe/' component={Home} />
            // <Route path='/venvi-fe/receive/:id' component={Auth} />
            // <Route exact path='/venvi-fe/search' component={Search} />
            // <Route exact path='/venvi-fe/profile' component={Profile} />
            // <Route exact path='/venvi-fe/market' component={Market} /> 


export default App;
