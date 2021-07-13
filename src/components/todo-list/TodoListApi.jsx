import React from "react";
import "./TodoList.css";

function TodoListApi(props) {
  return (
    <table id="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAMA</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          <th>PHONE</th>
          <th>WEBSITE</th>
          <th>COMPANY</th>
        </tr>
      </thead>
      {props.dataLoading ? (
        <tbody>
          <tr>
            <td colSpan="8">loading . . .</td>
          </tr>
        </tbody>
      ) : (
        <tbody key={props.dataTodos.id}>
          <tr>
            <td>{props.dataTodos.id}</td>
            <td>{props.dataTodos.name}</td>
            <td>{props.dataTodos.username}</td>
            <td>{props.dataTodos.email}</td>
            <td>
              {props.dataTodos &&
              props.dataTodos.address &&
              props.dataTodos.address.street
                ? props.dataTodos.address.street
                : ""}
            </td>
            <td>{props.dataTodos.phone}</td>
            <td>{props.dataTodos.website}</td>
            <td>
              {props.dataTodos &&
              props.dataTodos.company &&
              props.dataTodos.company.name
                ? props.dataTodos.company.name
                : ""}
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default TodoListApi;
