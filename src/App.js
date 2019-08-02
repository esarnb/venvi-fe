import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../src/utils/API'
import Home from './pages'

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
    <div>
      <Home/>
    </div>
  );
}
}

export default App;
