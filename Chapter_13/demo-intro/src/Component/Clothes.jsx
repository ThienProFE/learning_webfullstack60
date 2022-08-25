import React from "react";

const Clothes = ({ id, name, type, color, size }) => {
  return (
    <div style={{ color: "red" }}>
      <h1> Clothes {id}</h1>
      <ul>
        <li> Name: {name}</li>
        <li> Type: {type}</li>
        <li> Color: {color}</li>
        <li> Size: {size}</li>
      </ul>
    </div>
  );
};

export default Clothes;
