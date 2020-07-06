import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const transformedResults = state.results.filter((str) => {
    return str.id !== action.payload.deletedId;
  });

  return updateObject(state, {
    results: transformedResults,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.payload.result,
        }),
      });

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
  }

  return state;
};

export default reducer;
