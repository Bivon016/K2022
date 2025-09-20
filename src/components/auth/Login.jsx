import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseCon"; // adjust path to your firebase config
import "./loginsignup.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid Kenyan phone number");
      return;
    }

    // 🔹 Convert phone into a pseudo-email
    const formattedPhone = phone.startsWith("0")
      ? `+254${phone.substring(1)}`
      : phone.startsWith("254")
      ? `+${phone}`
      : phone; // ensures it’s always +2547xxxxxxx

    const pseudoEmail = `${formattedPhone}@myapp.com`;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        pseudoEmail,
        password
      );

      console.log("User logged in:", userCredential.user);
      navigate("/"); // redirect to home page
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err.message);
    }
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
              placeholder="Phone - +254712345678"
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

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="forgot-password">
            <a href="#">forgot password?</a>
          </div>

          <button type="submit">Log In</button>

          <div className="signup-link">
            <p>
              Don’t have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
