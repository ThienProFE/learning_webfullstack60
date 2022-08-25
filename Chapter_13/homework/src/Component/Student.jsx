import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <ul>
          <li style={{ color: "red" }}>
            {" "}
            <b>Số thứ tự: {this.props.id}</b>{" "}
          </li>
          <li>Tên: {this.props.name}</li>
          <li>Tuổi: {this.props.age}</li>
          <li>Năm sinh: {this.props.birth}</li>
          <li>
            Avatar:{" "}
            <img
              src={this.props.avatar}
              alt="Avatar"
              width="100"
              height="100"
            />
          </li>
          <li>Quê quán: {this.props.address}</li>
        </ul>
      </div>
    );
  }
}

export default Student;
