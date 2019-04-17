export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const REMOVE = "REMOVE";

export const add = todo => {
  return {
    type: ADD,
    payload: todo
  };
};

export const toggle = index => {
  return {
    type: TOGGLE,
    payload: index
  };
};

export const remove = index => {
  return {
    type: REMOVE,
    payload: index
  };
};
