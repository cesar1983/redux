import React, { Component } from "react";

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
        <button onClick={this.props.onStoreResult}>Store Result</button>
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
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),

    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),

    onAdd: (quantity) =>
      dispatch({ type: "ADD", payload: { quantity: quantity } }),

    onSubtract: (quantity) =>
      dispatch({ type: "SUBTRACT", payload: { quantity: quantity } }),

    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),

    onDeleteResult: (deletedId) =>
      dispatch({ type: "DELETE_RESULT", payload: { deletedId: deletedId } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
