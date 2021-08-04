import "./Login.css";
function User_Login() {
  return (
    <div className="Login_form">
      <h2>User Login</h2>
      <p>Enter your Name :</p>
      <input id="name" type="text" required />
      <p>Enter the Password :</p>
      <input id="password" type="password" required />
      <p>Enter your Email :</p>
      <input type="email" id="email" required />
      <button id="sbtn" type="submit" onClick={chacking}>
        LogIn
      </button>
    </div>
  );
}
export default User_Login;

function chacking() {
  let User_name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  if (User_name === "") {
    alert("User Name is Required");
  } else if (pass === "") {
    alert("A Proper Password is Required");
  } else if (email === "") {
    alert("Email Adress is Must!!");
  } 
  let array = [User_name, pass, email];
  localStorage.setItem("user_info", array);
  alert("Are sure with these login Creditionals ?");
  refreshPage();
}
function refreshPage() {
  window.location.reload();
}
