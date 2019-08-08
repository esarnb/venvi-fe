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
          1
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            {/* <Route exact path='/venvi-fe/:user' component={Home} /> */}
            <Route exact path={process.env.PUBLIC_URL + '/search'} component={Search} />
            <Route path={process.env.PUBLIC_URL + '/logged'} component={AuthSuccess} />
             {/* <Route path='/venvi-fe/auth/google/search'component={(props) => this.setState({userid: props.match.params.id})} /> */}
                         
             {this.state.userid ? (
               <React.Fragment>
                 <Route exact path={process.env.PUBLIC_URL + '/market'} component={Market} /> 
                 <Route exact path={process.env.PUBLIC_URL + '/profile'} component={Profile} />
               </React.Fragment>
             ) : <React.Fragment />} 

             <Route path={process.env.PUBLIC_URL + "*"} component={<div>Not found</div>} />
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




// To test locally 
            // <Route exact path='/' component={Home} />
            // <Route exact path='/search' component={Search} />
            // <Route exact path='/profile' component={Profile} />
            // <Route exact path='/market' component={Market} /> 
            // <Route path='/receive/:id' component={Auth} />



 // Change back to this before push to master   
            // <Route exact path='/venvi-fe/' component={Home} />
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
            // <Route exact path='/venvi-fe/search' component={Search} />
            // <Route exact path='/venvi-fe/profile' component={Profile} />
            // <Route exact path='/venvi-fe/market' component={Market} /> 
            // <Route path='/venvi-fe/receive/:id' component={Auth} />


export default App;
