const fetchData = async () => {
  let user_name = document.getElementById("input").value;
  const response = await fetch(`https://api.github.com/users/${user_name}`);
  const data = await response.json();
  try {
    if (data.message) {
      document.getElementById("error").innerHTML =
        "Không tìm thấy user bạn yêu cầu";
    } else {
      document.getElementById("error").innerHTML = "";
      document.getElementById(
        "info"
      ).innerHTML = `<li>User Name: ${data.login}</li>
    <li>Avatar: <img src=${data.avatar_url} /></li>
    <li>Email: ${data.email}</li>
    <li>Tên công ty: ${data.company}</li>
    <li>Số lượng người follow: ${data.followers}</li>
    `;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
fetchData();
