import React, { useState } from "react";
import SubmitStudent from "./Component/SubmitStudent";
import Student from "./Component/Student";
import { Input, notification } from "antd";

const App = () => {
  const [listStudent, setListStudent] = useState([
    {
      id: "1",
      name: "Emily Shaky",
      age: "28",
      gender: "Nam",
      address: "Hải Dương",
      phone: "0386434716",
      introduction: "Hello my friend",
    },
    {
      id: "2",
      name: "Tom Cruise",
      age: "26",
      gender: "Nữ",
      address: "Thái Bình",
      phone: "0346199448",
      introduction: "Hello world!",
    },
  ]);
  const handleSubmitStudent = (student) => {
    const id = student.id.value;
    const name = student.id.value;
    const age = student.id.value;
    const address = student.address.value;
    const gender = student.gender.value;
    const phone = student.phone.value;
    const introduction = student.introduction.value;
    const newStudent = { id, name, age, address, gender, phone, introduction };
    setListStudent([...listStudent, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    const newListStudent = listStudent.filter((item) => item.id !== id);
    setListStudent(newListStudent);
    notification["success"]({
      message: "Bạn đã xoá thành công",
      duration: 3,
    });
  };

  const searchMember = (keyword) => {
    const listSearchMember = listStudent.filter((name) =>
      name.name.includes(keyword)
    );
    setListStudent(listSearchMember);
  };

  return (
    <div>
      <SubmitStudent onAddStudent={handleSubmitStudent} />
      <Input
        placeholder="Nhập tên cần tìm kiếm"
        style={{
          width: 500,
          marginBottom: 10,
        }}
        onChange={(e) => searchMember(e.target.value)}
      />
      {listStudent.map((e, i) => {
        return (
          <Student
            key={i}
            id={e.id}
            name={e.name}
            age={e.age}
            gender={e.gender}
            address={e.address}
            phone={e.phone}
            introduction={e.introduction}
            onDelete={handleDeleteStudent}
          />
        );
      })}
    </div>
  );
};

export default App;
