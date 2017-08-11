import React from 'react';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Loading from 'react-loading-animation';


const Home = ({loading, createPeople, addPerson, people}) => (
  <div>
    <List>
      {
        people.length ?
          createPeople :
          <Loading />
      }
    </List>
    {loading ? <Loading /> : null}
    <FlatButton backgroundColor="#a4c639" hoverColor="#8AA62F" label="+ VOIR PLUS" fullWidth={true}
                onTouchTap={_ => {
                  addPerson();
                }}
    />
  </div>
);

export default Home;