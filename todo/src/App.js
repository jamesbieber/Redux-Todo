import React, { Component } from "react";
import TodoForm from "./components/TodoForm/TodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo-List</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
