import React from "react";
import { add } from "../../actions/index";
import { toggle } from "../../actions/index";

class TodoForm extends React.Component {
  handleChanges = event => {
    event.preventDefault();
    this.props.add(event.target.todo.value);
    event.target.todo.value = "";
  };

  render() {
    return (
      <div>
        <div>
          {this.props.todo.map((todo, index) => {
            return (
              <p onClick={() => this.props.toggle(todo)} key={index}>
                {todo.Todo}
              </p>
            );
          })}
        </div>

        <form onSubmit={event => this.handleChanges(event)}>
          <input type="text" placeholder="Add Task..." name="todo" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};
