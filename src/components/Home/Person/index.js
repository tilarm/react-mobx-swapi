import React, {Component} from 'react'
import {ListItem} from 'material-ui/List';
import Description from './Description';

import './style.css';

class Person extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      expand: false
    };
  }

  handleExpandDescription() {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return (
      <div className="person">
        <ListItem primaryText={this.props.name} onTouchTap={_ => {
          this.handleExpandDescription()
        }}/>
        {
          this.state.expand ? <Description {...this.props} /> : null
        }
      </div>
    )
  }
}

export default Person;