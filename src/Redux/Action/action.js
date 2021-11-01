import { ACTION_TYPE } from "../ActionType/actionType";

export const setData = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA,
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
