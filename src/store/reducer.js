const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    case "ADD":
      return {
        ...state,
        counter: state.counter + action.payload.quantity,
      };
      break;

    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.payload.quantity,
      };
      break;

    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
      break;

    case "DELETE_RESULT":
      const transformedResults = state.results.filter((str) => {
        return str.id !== action.payload.deletedId;
      });

      return {
        ...state,
        results: transformedResults,
      };
      break;
  }

  return state;
};

export default reducer;
