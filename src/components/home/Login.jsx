import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid Kenyan phone number");
      return;
    }
    
    console.log("Phone:", phone, "Password:", password);
  };

  return (
    <div className="myBody">
    <div className="myForm">
    <form onSubmit={handleSubmit}>
      <div className="welcome">
        <h1>Welcome Back</h1>
        <p>Log in to manage your saving group</p>
      </div>

      <div className="login-details">
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="forgot-password">
       <a href="dc">forgot password?</a>
      </div>

      <button type="submit">Log In</button>
    </form>
    </div>
    </div>
  );
  
};

export default Login;
