import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from '../src/Utils/API'

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
