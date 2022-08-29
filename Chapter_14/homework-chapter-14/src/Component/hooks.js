import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value: value, onChange: onChange };
};

export { useInput };
