import React, { Fragment } from "react";
import "./TodoList.css";

class TodoListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // --- CARA KE 2 ---
      // total: 0,
      todos: [
        {
          kode: "101",
          nama: "Barats",
          gambar: "/image/barats.jpg",
          pekerjaan: "Fighter",
          pilihan: 0,
        },
        {
          kode: "201",
          nama: "Benedeta",
          gambar: "/image/benedeta.jpg",
          pekerjaan: "Assassin",
          pilihan: 0,
        },
      ],
    };
  }

  handleCounterChange = (value) => {
    this.props.onCounterChange(value);
  };

  handlePlus = () => {
    // -- CARA KE 1 ---
    // this.props.setPlusTotal(1);
    //
    // --- CARA KE 2 ---
    // this.setState(
    //   {
    //     total: this.state.total + 1,
    //   },
    //   () => this.handleCounterChange(this.state.total)
    // );
    //
    // --- CARA KE 3 ---
    this.handleCounterChange(this.props.dataTotal + 1);
  };

  handleMinus = () => {
    // --- CARA KE 1 ---
    // this.props.setMinusTotal(1);
    //
    // --- CARA KE 2 ---
    // if (this.props.dataTotal >= 1) {
    // this.setState(
    //   {
    //     total: this.state.total - 1,
    //   },
    //   () => this.handleCounterChange(this.state.total)
    // );
    // }
    //
    // --- CARA KE 3 ---
    if (this.props.dataTotal >= 1) {
      this.handleCounterChange(this.props.dataTotal - 1);
      this.setState({
        pilihan: this.state.pilihan - 1,
      });
    }
  };
  render() {
    return (
      <Fragment>
        {this.state.todos.map((todo) => {
          return (
            <ul key={todo.kode}>
              <li>
                <b>({todo.pilihan})</b>
              </li>
              <li className="gambar">
                <button onClick={this.handleMinus}>-</button>
                <img
                  src={process.env.PUBLIC_URL + todo.gambar}
                  alt=""
                  onClick={this.handleClick}
                />
                <button onClick={this.handlePlus} value={todo.kode}>
                  +
                </button>
              </li>
              <li className="kode">{todo.kode}</li>
              <hr />
              <li className="nama">{todo.nama}</li>
              <li className="pekerjaan">{todo.pekerjaan}</li>
            </ul>
          );
        })}
      </Fragment>
    );
  }
}

export default TodoListClass;
