import React, {Component} from 'react';
import {Provider} from "mobx-react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout';
import * as stores from './stores';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider { ...stores }>
          <Layout/>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

// access stores in browser console for DEBUG purpose
if (process.env.NODE_ENV === 'development') {
  window.people = stores.PeopleStore;
}

export default App;
