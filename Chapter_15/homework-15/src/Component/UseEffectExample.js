import React, { useEffect, useState } from "react";
import { Button } from "antd";

const UseEffectExample = () => {
  const [time, setTime] = useState(0);
  const [timeIncrease, setTimeIncrease] = useState(false);

  const handleStart = () => {
    setTimeIncrease(true);
  };

  const handleStop = () => {
    setTimeIncrease(false);
  };

  useEffect(() => {
    if (timeIncrease) {
      const timeInterval = setInterval(() => setTime(time + 1), 1000);
      return () => clearInterval(timeInterval);
    }
  }, [time, timeIncrease]);

  return (
    <div style={{ margin: "0 auto", width: 500, textAlign: "center" }}>
      <h1 style={{ fontSize: 40 }}>useEffect() Hook Example</h1>
      <h2>Timer that uses the useEffect() and useState() hook</h2>
      <h3 style={{ color: "red" }}>Timer: {time}</h3>
      {timeIncrease ? (
        <Button
          type="primary"
          shape="round"
          size={"large"}
          danger
          onClick={handleStop}
        >
          Stop
        </Button>
      ) : (
        <Button
          type="primary"
          shape="round"
          size={"large"}
          onClick={handleStart}
        >
          Start
        </Button>
      )}
      <br /> <br />
      <Button
        type="primary"
        ghost
        shape="round"
        size={"large"}
        onClick={() => setTime(0)}
      >
        Reset
      </Button>
    </div>
  );
};

export default UseEffectExample;
