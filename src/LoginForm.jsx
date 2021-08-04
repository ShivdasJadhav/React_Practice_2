import "./Login.css";
function User_Login() {
  return (
    <div className="Login_form">
      <h2>User Login</h2>
      <p>Enter your Name :</p>
      <input id="name" type="text"  required="true" />
      <p>Enter the Password :</p>
      <input id="password" type="password" required="true" />
      <p>Enter your Email :</p>
      <input type="email" id="email" required="true" />
      <button id="sbtn" onClick={submit}>
        LogIn
      </button>
    </div>
  );
}
export default User_Login;
function submit() {
  let User_name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let array=[User_name, pass, email];
  localStorage.setItem("user_info",array );
  alert("succesfully login");
}
