import React, { Component } from "react";
// import Clothes from "./Component/Clothes.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    //Chỉ định 1 state của chính component App
    this.state = { number: 0 };
  }

  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <p>Giá trị: {this.state.number}</p>
        <button onClick={this.handleIncrease}>Tăng</button>
        <button onClick={this.handleDecrease}>Giảm</button>
        <hr />
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Tăng (Viết gọn)
        </button>
        <button
          onClick={() => this.setState({ number: this.state.number - 1 })}
        >
          Giảm (Viết gọn)
        </button>
      </div>
    );
  }
}

export default App;

// Function Component (Clothes)
// const App = () => {z
//   const clothes = [
//     {
//       id: 1,
//       name: "Quan Jean",
//       type: "Skinny",
//       color: "Den",s
//       size: "L",
//     },
//     {
//       id: 2,
//       name: "Vay",
//       type: "Vay cong chua",
//       color: "Trang",
//       size: "M",
//     },
//   ];

//   return (
//     <div>
//       <Clothes
//         id={clothes[0].id}
//         name={clothes[0].name}
//         type={clothes[0].type}
//         color={clothes[0].color}
//         size={clothes[0].size}
//       />
//       <Clothes
//         id={clothes[1].id}
//         name={clothes[1].name}
//         type={clothes[1].type}
//         color={clothes[1].color}
//         size={clothes[1].size}
//       />
//       <hr />
//       <Count />
//     </div>
//   );
// };

// export default App;
