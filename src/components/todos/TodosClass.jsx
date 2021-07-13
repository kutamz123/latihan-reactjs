import React from "react";
import TodoListClass from "../todo-list/TodoListClass";

class TodosClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      // todos: [
      //   {
      //     kode: "101",
      //     nama: "Barats",
      //     gambar: "/image/barats.jpg",
      //     pekerjaan: "Fighter",
      //     pilihan: 0,
      //   },
      // {
      //   kode: "201",
      //   nama: "Benedeta",
      //   gambar: "/image/benedeta.jpg",
      //   pekerjaan: "Assassin",
      //   pilihan: 0,
      // },
      // {
      //   kode: "301",
      //   nama: "Brody",
      //   gambar: "/image/brody.jpg",
      //   pekerjaan: "Marksman",
      //   pilihan: 0,
      // },
      // {
      //   kode: "401",
      //   nama: "Khaleed",
      //   gambar: "/image/khaleed.jpg",
      //   pekerjaan: "Tank",
      //   pilihan: 0,
      // },
      // {
      //   kode: "501",
      //   nama: "Luo-Yi",
      //   gambar: "/image/luoyi.jpg",
      //   pekerjaan: "Fighter",
      //   pilihan: 0,
      // },
      // {
      //   kode: "601",
      //   nama: "Yuzhong",
      //   gambar: "/image/yuzhong.jpg",
      //   pekerjaan: "Fighter",
      //   pilihan: 0,
      // },
      // {
      //   kode: "701",
      //   nama: "Mathilda",
      //   gambar: "/image/mathilda.jpg",
      //   pekerjaan: "Support",
      //   pilihan: 0,
      // },
      // {
      //   kode: "801",
      //   nama: "Popol",
      //   gambar: "/image/popol.jpg",
      //   pekerjaan: "Marksman",
      //   pilihan: 0,
      // },
      // ],
    };
  }

  // --- CARA KE 3 ---
  // setPlusTotal = () => {
  //   this.setState({
  //     total: this.state.total + 1,
  //   });
  //   console.log(this.state.todos);
  // };
  // --- CARA KE 3 ---
  // setMinusTotal = () => {
  //   this.setState({
  //     total: this.state.total - 1,
  //   });
  // };

  handleCounterChange = (newValue) => {
    this.setState({
      total: newValue,
    });
  };

  render() {
    return (
      <div>
        <h1>Daftar hero mobile legend</h1>
        <h2>Pilihan Hero</h2>
        <h2>Total hero ({this.state.total})</h2>
        <TodoListClass
          onCounterChange={(value) => this.handleCounterChange(value)}
          // dataTodos={this.state.todos}
          //
          // --- CARA KE 1 ---
          // setPlusTotal={this.setPlusTotal}
          // setMinusTotal={this.setMinusTotal}
          //
          // --- CARA KE 3 ---
          dataTotal={this.state.total}
        />
      </div>
    );
  }
}

export default TodosClass;
