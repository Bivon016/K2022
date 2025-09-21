import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  sendPasswordResetEmail, // ✅ Added
} from "firebase/auth";
import { auth } from "../../config/firebaseCon";
import "./loginsignup.css";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // phone OR email
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // ✅ For success messages
  const navigate = useNavigate();

  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;
  const googleProvider = new GoogleAuthProvider();

  // 🔹 Normalize phone → pseudo-email
  const formatPhoneToEmail = (phone) => {
    const formattedPhone = phone.startsWith("0")
      ? `+254${phone.substring(1)}`
      : phone.startsWith("254")
      ? `+${phone}`
      : phone;
    return `${formattedPhone}@myapp.com`;
  };

  // 🔹 Forgot Password
  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!identifier) {
      setError("Please enter your phone or email first.");
      return;
    }

    // Convert phone → pseudo-email if needed
    let loginEmail = identifier;
    if (phoneRegex.test(identifier)) {
      loginEmail = formatPhoneToEmail(identifier);
    }

    try {
      await sendPasswordResetEmail(auth, loginEmail);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setError(err.message);
      console.error("Password reset error:", err.message);
    }
  };

  // 🔹 Google sign in with identifier check
  const handleGoogleSignIn = async () => {
    try {
      if (!identifier) {
        setError("Please enter phone or email before using Google login.");
        return;
      }

      // Convert phone to pseudo-email if needed
      let loginEmail = identifier;
      if (phoneRegex.test(identifier)) {
        loginEmail = formatPhoneToEmail(identifier);
      }

      // Start Google sign in
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      // Check if this email/phone already exists
      const methods = await fetchSignInMethodsForEmail(auth, loginEmail);
      if (methods.length > 0) {
        const emailCred = EmailAuthProvider.credential(
          loginEmail,
          password || "defaultPass123"
        );
        try {
          await linkWithCredential(googleUser, emailCred);
          console.log("Linked Google with:", loginEmail);
        } catch (err) {
          if (err.code !== "auth/credential-already-in-use") throw err;
        }
      }

      console.log("Google login successful:", googleUser);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Google Sign In Error:", error.message);
    }
  };

  // 🔹 Email/Phone login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    let loginEmail = identifier;
    if (phoneRegex.test(identifier)) {
      loginEmail = formatPhoneToEmail(identifier);
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        password
      );
      console.log("Login successful:", userCredential.user);
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
              placeholder="Email or Phone - +254712345678"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              autoComplete="username"
            />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}

          <div className="forgot-password">
            <button
              type="button"
              onClick={handleForgotPassword}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Forgot password?
            </button>
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
