import { React, useState } from "react";
import "./Todos.css";
import TodoList from "../todo-list/TodoList";

// arrow function
const Todos = () => {
  const [getTotal, setTotal] = useState(20);

  const eventTotal = (data) => {
    console.log(setTotal(getTotal + data));
  };

  const dataTodos = [
    {
      kode: "101",
      nama: "Barats",
      gambar: "/image/barats.jpg",
      pekerjaan: "Fighter",
    },
    {
      kode: "201",
      nama: "Benedeta",
      gambar: "/image/benedeta.jpg",
      pekerjaan: "Assassin",
    },
    {
      kode: "301",
      nama: "Brody",
      gambar: "/image/brody.jpg",
      pekerjaan: "Marksman",
    },
    {
      kode: "401",
      nama: "Khaleed",
      gambar: "/image/khaleed.jpg",
      pekerjaan: "Tank",
    },
    {
      kode: "501",
      nama: "Luo-Yi",
      gambar: "/image/luoyi.jpg",
      pekerjaan: "Fighter",
    },
    {
      kode: "601",
      nama: "Yuzhong",
      gambar: "/image/yuzhong.jpg",
      pekerjaan: "Fighter",
    },
    {
      kode: "701",
      nama: "Mathilda",
      gambar: "/image/mathilda.jpg",
      pekerjaan: "Support",
    },
    {
      kode: "801",
      nama: "Popol",
      gambar: "/image/popol.jpg",
      pekerjaan: "Marksman",
    },
  ];
  return (
    <div>
      <h1>Daftar hero mobile legend</h1>
      <h2>Total Hero ({getTotal})</h2>
      <TodoList propsTodos={dataTodos} propsTotal={eventTotal} />
    </div>
  );
};

export default Todos;
