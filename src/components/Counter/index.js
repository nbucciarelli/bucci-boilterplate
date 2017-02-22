import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="Counter">
        <RaisedButton label="+" onTouchTap={() => this.props.actions.increment()}>
        </RaisedButton>
        <RaisedButton label="-" onTouchTap={() => this.props.actions.decrement()}>
        </RaisedButton>
        <p>
          {this.props.counter}
        </p>
      </div>
    )
  }
}

export default Counter
