import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/counter'
import Counter from '../components/Counter'

function mapStateToProps(state, props) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
