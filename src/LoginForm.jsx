import "./Login.css";
function Login(){
    return(
        <div className="Login_form">
            <h2>User Login</h2>
            <p>Enter your Name</p>
            <input id="name" type="text"/>
            <p>Enter the Password</p>
            <input id="password" type="password"/>
            <p>Enter your Email</p>
            <input type="email" id="email"/>
            <button type="submit" onClick={submit}>submit</button>
        </div>
    );
}
function submit() {
    let User_name = document.getElementById("name");
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    localStorage.setItem("user_info", [User_name, pass, email]);
  }
  
export default Login;