import React, { useRef, useEffect } from "react";

const UseRefBasic = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    //Lấy thành phần dome note => Chính là lấy thẻ inputs
    console.log("ref-input", inputRef.current);
    //focus -> Gán các thuộc tính của thẻ cho note
    // inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Lấy giá trị của thẻ input thông qua inputRef đã config
    // Sử dụng biến inputRef đã gán giá trị cho nó ở bước useEffect
    console.log(inputRef.current.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefBasic;
