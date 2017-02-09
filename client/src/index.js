import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './index.css';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import reducers from './reducers'
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Routes history={history} store={store} />,
  document.getElementById('root')
);
