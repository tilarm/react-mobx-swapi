import React, {Component} from 'react';
import logo from './star_wars_logo.jpg';

class Logo extends Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo"/>
    );
  }
}

export default Logo;
