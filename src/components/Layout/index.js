import React, { Component } from 'react';
import Logo from './Logo';
import './style.css';
import HomeContainer from '../../containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo/>
        </div>
        <div className="App-intro">
          <HomeContainer/>
        </div>
      </div>
    );
  }
}

export default App;
