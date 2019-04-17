import React from "react";
import Todo from "../Todo/Todo";
import { add } from "../../actions/index";
import { toggle } from "../../actions/index";
import { connect } from "react-redux";

class TodoForm extends React.Component {
  state = {
    todo: ""
  };

  handleChanges = event => {
    this.setState({ todo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.add(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  toggleTodo = (event, index) => {
    event.preventDefault();
    this.props.toggle(index);
  };

  render() {
    return (
      <div>
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <h3 onClick={event => this.toggleTodo(event, index)} key={index}>
              {todo.value}
            </h3>
          ))}
        </div>

        <form>
          <input
            type="text"
            onChange={this.handleChanges}
            value={this.state.todo}
            placeholder="Add Task..."
            name="todo"
          />
          <button onClick={this.addTodo}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { add, toggle }
)(TodoForm);
