import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.payload.result,
        }),
      };

    case actionTypes.DELETE_RESULT:
      const transformedResults = state.results.filter((str) => {
        return str.id !== action.payload.deletedId;
      });

      return {
        ...state,
        results: transformedResults,
      };
  }

  return state;
};

export default reducer;
