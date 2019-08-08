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
    userid: undefined,
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
            {/* <Route exact path='/:user' component={Home} /> */}
            <Route exact path='/search' component={Search} />
            <Route path="/logged" component={AuthSuccess} />
             {/* <Route path='/auth/google/search'component={(props) => this.setState({userid: props.match.params.id})} /> */}
                         
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
