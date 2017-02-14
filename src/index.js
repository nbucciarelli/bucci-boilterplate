import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './index.css';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import firebase from "firebase/app"
// import firebaseAuth from "firebase/auth"
// import firebaseDb from "firebase/database"
require('firebase/auth')
require('firebase/database')

import firebaseConfig from '../config/firebase'
firebase.initializeApp(firebaseConfig);

import reducers from './reducers'
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Routes history={history} store={store} firebase={firebase}/>,
  document.getElementById('root')
);
