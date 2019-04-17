import { ADD } from "../actions/index";
import { TOGGLE } from "../actions/index";

const initialState = {
  todos: [
    {
      value: "Take out trash",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action.payload);
      const todo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, todo]
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return state;
  }
};

export default reducer;
