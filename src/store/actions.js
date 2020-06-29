export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// action creator
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: ADD,
    payload: { quantity: value },
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    payload: { quantity: value },
  };
};

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    payload: { result: res },
  };
};

export const deleteResult = (deletedId) => {
  return {
    type: DELETE_RESULT,
    payload: { deletedId: deletedId },
  };
};
