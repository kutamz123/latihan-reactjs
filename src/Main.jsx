import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Todos from "./components/todos/Todos";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
};

export default Main;
