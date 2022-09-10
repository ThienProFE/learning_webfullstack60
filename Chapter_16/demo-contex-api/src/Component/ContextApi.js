import React, { useState, useContext } from "react";
import members from "../data/members";

//B1. Khởi tạo 1 context API
const PersonContext = React.createContext();
//Component Ông nội
const ContextApi = () => {
  const [people, setPeople] = useState(members);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((p) => p.id !== id);
    });
  };

  const addPerson = (value) => {
    const newPerson = { id: people.length + 1, name: value };
    setPeople([...people, newPerson]);
  };

  return (
    //B2. Khởi tạo 1 provider
    <PersonContext.Provider value={{ people, removePerson, addPerson }}>
      <UserList />
    </PersonContext.Provider>
  );
};
//Component Cha
const UserList = () => {
  //B3. Sử dụng data từ component ông nội truyền xuống
  const { people, addPerson } = useContext(PersonContext);
  const [value, setValue] = useState("");

  return (
    <>
      {people.map((member, index) => {
        return <SinglePerson key={index} {...member} />;
      })}
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={() => addPerson(value)}>Add Person</button>
    </>
  );
};
//Component Cháu
const SinglePerson = (props) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={() => removePerson(props.id)}>Remove</button>
    </>
  );
};

export default ContextApi;
