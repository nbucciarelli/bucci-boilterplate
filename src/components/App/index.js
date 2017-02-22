import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router'

import './App.css';
import CounterContainer from '../../containers/CounterContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <MuiThemeProvider>
        <div className={classnames('App', className)} {...props}>
          <AppBar
            title="Bucci Boilerplate"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <p>
            <Link to={`/about`}>About</Link>
            <Link to={`/login`}>Login</Link>
          </p>
          <CounterContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
