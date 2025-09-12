import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid Kenyan phone number");
      return;
    }

    console.log("Username:", username, "Phone:", phone, "Email:", email, "Password:", password);
  };

  return (
    <div className="myBody">
      <div className="myForm">
        <form onSubmit={handleSubmit}>
          <div className="welcome">
            <h1>Create Account</h1>
            <p>Sign up to join your saving group</p>
          </div>

          <div className="login-details">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign Up</button>

          <div className="signup-link">
            <p>
              Already have an account?{" "}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
