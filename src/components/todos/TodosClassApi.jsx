import "./Todos.css";
import React from "react";
import axios from "axios";
import TodoListClassApi from "../todo-list/TodoListClassApi";

class TodosClassApi extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputTodo: 1,
    };
  }

  getTodos = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + this.state.inputTodo
    );
    this.setState({
      todos: response.data,
    });
  };

  componentDidMount() {
    this.getTodos();
  }

  getInputTodo = (e) => {
    this.setState({
      inputTodo: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputTodo}
          onChange={this.getInputTodo}
        />
        <TodoListClassApi dataTodos={this.state.todos} />
      </div>
    );
  }
}

export default TodosClassApi;
