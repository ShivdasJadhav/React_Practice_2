import React from "react";
import reactDom from "react-dom";
import LoginForm from "./LoginForm.jsx";
import SecretePage from "./SecretePage";
reactDom.render(
  <div className="container">
    <div className="main">
      <LoginForm/>
    </div>
  </div>,
  document.getElementById("root")
);
