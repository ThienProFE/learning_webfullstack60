import React, { useReducer } from "react";

//Bộ chuyển đổi -> Với mỗi action sẽ trả ra state mới tương ứng
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseHookReducer = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <>
      <div>
        <h1>Number {state.count}</h1>
      </div>
      <div>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default UseHookReducer;
