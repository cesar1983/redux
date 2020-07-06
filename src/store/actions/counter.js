import * as actionTypes from "./actionTypes";

// action creator
export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    payload: { quantity: value },
  };
};

export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    payload: { quantity: value },
  };
};

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: { result: res },
  };
};
