import React from "react";

class Todo extends React.Component {
  render() {
    return <p>{this.props.todo.value}</p>;
  }
}

export default Todo;
