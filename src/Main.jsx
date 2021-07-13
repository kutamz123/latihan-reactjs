import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Todos from "./components/todos/Todos";
// import TodosApi from "./components/todos/TodosApi";
import TodosClass from "./components/todos/TodosClass";
// import TodosClassApi from "./components/todos/TodosClassApi";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <Header />
      {/* <Todos /> */}
      <TodosClass />
      {/* <TodosClassApi /> */}
      {/* <TodosClassApi /> */}
      <Footer />
    </div>
  );
};

export default Main;
