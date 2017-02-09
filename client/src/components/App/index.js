import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router'

import logo from './logo.svg';
import './App.css';
import Counter from '../Counter'

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Link to={`/about`}>About</Link>
        </p>
        <Counter />
      </div>
    );
  }
}

export default App;