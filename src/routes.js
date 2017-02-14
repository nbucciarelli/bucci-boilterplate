// src/routes.js
import React from 'react'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
import Login from './components/Login'

const Routes = (props) => (
  <Provider store={props.store}>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
)

export default Routes
