import React from "react";
import "./TodoList.css";

// arrow function
const TodoList = (props) => {
  const handleClick = () => {
    props.propsTotal(1);
  };
  return props.propsTodos.map((todos) => {
    return (
      <ul key={todos.kode}>
        <li className="gambar">
          <img
            src={process.env.PUBLIC_URL + todos.gambar}
            alt=""
            onClick={handleClick}
          />
        </li>
        <li className="kode">{todos.kode}</li>
        <hr />
        <li className="nama">{todos.nama}</li>
        <li className="pekerjaan">{todos.pekerjaan}</li>
      </ul>
    );
  });
};

TodoList.defaultProps = {
  kode: "0",
  gambar: "/image/img-default.jpg",
  nama: "Hero",
  pekerjaan: "None Job",
};

export default TodoList;
