import { ACTION_TYPE } from "../ActionType/actionType";

export const setDataOne = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA_FIRST,
    payload: data,
  };
};

export const setDataTwo = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA_SECOND,
    payload: data,
  };
};

export const setDataThree = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA_THIRD,
    payload: data,
  };
};

export const searchData = function (data) {
  return {
    type: ACTION_TYPE.SEARCH_DATA,
    payload: data,
  };
};

export const removeSearchData = function () {
  return {
    type: ACTION_TYPE.REMOVE_SEARCH_DATA,
  };
};
