export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const REMOVE = "REMOVE";

export const add = todo => {
  return {
    type: ADD,
    payload: todo
  };
};

export const toggle = todo => {
  return {
    type: TOGGLE,
    payload: todo
  };
};

export const remove = todo => {
  return {
    type: REMOVE,
    payload: todo
  };
};
