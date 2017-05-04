import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    fetch('/temp')
      .then(res => {
        return res.json();
      })
      .then(resJSON => {console.log(resJSON)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
