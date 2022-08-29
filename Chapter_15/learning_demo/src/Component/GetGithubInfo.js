import React, { useState, useEffect } from "react";

const GetGithubInfo = () => {
  const [user, setUser] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giống componentDidMout
    // Chỉ render 1 lần đầu tiên, thường dùng để call API
    fetch("https://api.github.com/users/anhtbok92")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <>
      {isLoading ? <h1>Loading data, please wait...</h1> : null}
      {!isError && !isLoading && user && (
        <>
          <p>Tên tài khoản: {user.login}</p>
          <p>Link tài khoản: {user.url}</p>
          <p>Số người repository: {user.public_repos} </p>
          <p>Số người theo dõi: {user.followers}</p>
        </>
      )}
      {isError && <h1>Có lỗi xảy ra, vui lòng thử lại</h1>}
    </>
  );
};

export default GetGithubInfo;
