import React, { Component } from 'react'
import { Link } from 'react-router'
// import classnames from 'classnames'
import firebase from 'firebase';
import firebaseui from 'firebaseui'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      authUi: new firebaseui.auth.AuthUI(firebase.auth())
    }
  }
  componentDidMount() {
    console.log(this.state.authUi);
    var self = this
    var uiConfig = {
      'callbacks': {
        'signInSuccess': (user) => {
          if (self.props.onSignIn) {
            self.props.onSignIn(user)
          }
          return false
        }
      },
      'signInOptions': [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.state.authUi.start('#firebaseui-auth', uiConfig)
  }
  componentWillUnmount() {
    this.state.authUi.reset()
  }
  render() {
    // const { className, ...props } = this.props
    return (
      <div>
        <h1>
          About
        </h1>
        <div id="firebaseui-auth"></div>
        <Link to={`/`}>Home</Link>
      </div>
    )
  }
}
