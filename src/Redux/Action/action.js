import { ACTION_TYPE } from "../ActionType/actionType";

export const setData = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA,
    payload: data,
  };
};
