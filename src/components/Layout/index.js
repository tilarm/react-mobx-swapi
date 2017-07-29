import React, { Component } from 'react';
import Logo from './Logo';
import './style.css';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo/>
        </div>
        <div className="App-intro">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
