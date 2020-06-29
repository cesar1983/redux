import React, { Component } from "react";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtract(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => {
      dispatch({ type: actionTypes.INCREMENT });
    },

    onDecrementCounter: () => {
      dispatch({ type: actionTypes.DECREMENT });
    },

    onAdd: (quantity) => {
      dispatch({ type: actionTypes.ADD, payload: { quantity: quantity } });
    },

    onSubtract: (quantity) => {
      dispatch({ type: actionTypes.SUBTRACT, payload: { quantity: quantity } });
    },

    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: { result: result } }),

    onDeleteResult: (deletedId) => {
      dispatch({
        type: actionTypes.DELETE_RESULT,
        payload: { deletedId: deletedId },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
