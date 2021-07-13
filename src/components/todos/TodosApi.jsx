import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todos.css";
import TodoListApi from "../todo-list/TodoListApi";

function TodosApi() {
  const [identifier, setIdentifier] = useState([1]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + identifier
      );
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      alert(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, [identifier]);

  return (
    <div>
      <input
        type="text"
        name="identifier"
        id="identifier"
        value={identifier}
        onChange={(e) => {
          setIdentifier(e.target.value);
        }}
      />
      <TodoListApi dataTodos={todos} dataLoading={loading} />
      <button onClick={getTodos}>Click me</button>
    </div>
  );
}

export default TodosApi;
