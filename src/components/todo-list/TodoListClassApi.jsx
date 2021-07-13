import React, { Component } from "react";
import "./TodoList.css";

class TodoListClassApi extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <table align="center" id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        {/* {this.props.dataTodos.map((todo) => {
          return ( */}
        <tbody
          key={
            this.props.dataTodos && this.props.dataTodos.id
              ? this.props.dataTodos.id
              : ""
          }
        >
          <tr>
            <td>
              {this.props.dataTodos && this.props.dataTodos.name
                ? this.props.dataTodos.name
                : ""}
            </td>
            <td>
              {this.props.dataTodos && this.props.dataTodos.username
                ? this.props.dataTodos.username
                : ""}
            </td>
            <td>
              {this.props.dataTodos && this.props.dataTodos.email
                ? this.props.dataTodos.email
                : ""}
            </td>
            <td>
              {this.props.dataTodos &&
              this.props.dataTodos.address &&
              this.props.dataTodos.address.street
                ? this.props.dataTodos.address.street
                : ""}
            </td>
            <td>
              {this.props.dataTodos && this.props.dataTodos.phone
                ? this.props.dataTodos.phone
                : ""}
            </td>
            <td>
              {this.props.dataTodos && this.props.dataTodos.website
                ? this.props.dataTodos.website
                : ""}
            </td>
            <td>
              {this.props.dataTodos &&
              this.props.dataTodos.company &&
              this.props.dataTodos.company.name
                ? this.props.dataTodos.company.name
                : ""}
            </td>
          </tr>
        </tbody>
        {/* );
        })} */}
      </table>
    );
  }
}

export default TodoListClassApi;
