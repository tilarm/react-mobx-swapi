import React, {Component} from 'react';
import Loading from 'react-loading-animation';
import {observer, inject} from 'mobx-react';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Scroll from 'react-scroll';

import Person from './Person';

@inject(['PeopleStore']) @observer
export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props.PeopleStore.setPeople();
  }

  addPerson() {
    Scroll.animateScroll.scrollToBottom();

    this.setState({loading: true});
    if(!this.state.loading) {
      this.props.PeopleStore.addPerson()
        .then((response) => {
          this.setState({loading: false});
        })
        .catch((err) => {
          console.warn(err)
        });
    }
  }

  createPeople() {
    return this.props.PeopleStore.people.map(function (person, i) {
      return <Person key={i} {...person} />;
    });
  }

  render() {
    let {people} = this.props.PeopleStore;

    return (
      <div>
        <List>
          {
            people.length ?
              this.createPeople() :
              <Loading />
          }
        </List>
        {this.state.loading ? <Loading /> : null}
        <FlatButton backgroundColor="#a4c639" hoverColor="#8AA62F" label="+ VOIR PLUS" fullWidth={true}
                    onTouchTap={_ => {
                      this.addPerson();
                    }}
        />
      </div>
    )
  }
}