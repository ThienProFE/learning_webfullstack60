import React, { Component } from "react";
import Student from "./Component/Student";
import students from "./students.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { listStudents: students };
  }

  handleDelete = () => {
    this.setState({ listStudents: [] });
  };

  render() {
    return (
      <div>
        <h2>DANH SÁCH HỌC SINH</h2>
        <button onClick={this.handleDelete}>Xoá toàn bộ học sinh</button>
        {this.state.listStudents.length === 0 ? (
          <p style={{ color: "red" }}>
            <b>Danh sách lớp trống</b>
          </p>
        ) : (
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
        )}
      </div>
    );
  }
}

export default App;
