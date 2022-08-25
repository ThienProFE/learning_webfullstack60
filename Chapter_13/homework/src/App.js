import React, { Component } from "react";
import Student from "./Component/Student";
import students from "./students.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { listStudents: students, showListStudent: true };
  }

  handleDelete = () => {
    this.setState({ listStudents: [], showListStudent: false });
  };
  handleReturnListStudent = () => {
    this.setState({ listStudents: students, showListStudent: true });
  };
  s;
  render() {
    return (
      <div>
        <h2>DANH SÁCH HỌC SINH</h2>
        <button onClick={this.handleDelete}>Xoá toàn bộ học sinh</button>
        <button onClick={this.handleReturnListStudent}>
          Hiển thị danh sách học sinh
        </button>
        {this.state.showListStudent ? (
          this.state.listStudents.map((e, i) => {
            return (
              <Student
                key={i}
                id={e.id}
                name={e.name}
                age={e.age}
                birth={e.birth}
                avatar={e.avatar}
                address={e.address}
              />
            );
          })
        ) : (
          <p style={{ color: "red" }}>
            <b>Danh sách lớp trống</b>
          </p>
        )}
      </div>
    );
  }
}

export default App;
