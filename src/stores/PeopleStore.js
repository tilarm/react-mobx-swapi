import {observable, action} from 'mobx';
import axios from 'axios';

class PeopleStore {

  @observable people = [];

  @action addPerson() {
    let nextPerson = this.people.length + 1;

    return new Promise((resolve, reject) => {
      axios.get('http://swapi.co/api/people/' + nextPerson)
        .then(response => {
          this.people.push(response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action setPeople() {
    axios.get('http://swapi.co/api/people/?page=1')
      .then(response => {
        this.people = response.data.results;
      })
      .catch(error => {
        console.log('Fetch Error : ', error);
      });
  }

  @action toggleDescription(id) {
    this.people[id].expand = !this.people[id].expand;
  }
}


export default new PeopleStore();