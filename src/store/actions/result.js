import * as actionTypes from "./actionTypes";

export const storeResult = (res) => {
  return (dispacth, getState) => {
    setTimeout(() => {
      //   const oldCOunter = getState().ctr.counter;
      //   console.log("oldCounter  ", oldCOunter);
      dispacth(saveResult(res));
    }, 2000);
  };
};

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: { result: res },
  };
};

export const deleteResult = (deletedId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: { deletedId: deletedId },
  };
};
