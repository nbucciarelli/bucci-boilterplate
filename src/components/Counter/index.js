import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../../actions/counter';
import RaisedButton from 'material-ui/RaisedButton';
class Counter extends Component {
  constructor(props) {
    super(props);
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
    );
  }
}
function mapStateToProps(state, props) {
  return {
      counter: state.counter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
