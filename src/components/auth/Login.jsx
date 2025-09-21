import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebaseCon"; // adjust path if needed
import "./loginsignup.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;
  const googleProvider = new GoogleAuthProvider();

  // 🔹 Google sign in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Google Sign In Error:", error.message);
    }
  };

  // 🔹 Phone (pseudo-email) sign in
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid Kenyan phone number");
      return;
    }

    // Convert phone into a pseudo-email
    const formattedPhone = phone.startsWith("0")
      ? `+254${phone.substring(1)}`
      : phone.startsWith("254")
      ? `+${phone}`
      : phone;

    const pseudoEmail = `${formattedPhone}@myapp.com`;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        pseudoEmail,
        password
      );

      console.log("User logged in:", userCredential.user);
      navigate("/");
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
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>

          <div className="signup-link">
<button
  type="button"
  className="google-btn"
  onClick={handleGoogleSignIn}
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="google-icon"
  />
  Continue with Google
</button>
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
