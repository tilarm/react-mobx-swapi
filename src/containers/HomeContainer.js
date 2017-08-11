import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Scroll from 'react-scroll';

import Person from '../components/Home/Person';
import Home from '../components/Home';

@inject(['PeopleStore']) @observer
export default class HomeContainer extends Component {
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
    if (!this.state.loading) {
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

    return (
      <Home {...this.props.PeopleStore} {...this.state}
            addPerson={_ => this.addPerson()} createPeople={this.createPeople()} />
    )
  }
}