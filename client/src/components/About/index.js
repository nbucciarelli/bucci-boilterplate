// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router'

import './About.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
        </h1>
        <Link to={`/`}>Home</Link>
      </div>
    );
  }
}
