import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseCon"; // adjust path if needed
import "./loginsignup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;
  const googleProvider = new GoogleAuthProvider();

  // 🔹 Google sign up
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      // Save user info in Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        username: result.user.displayName || "",
        phone: "", // Google won't give phone, leave blank or update later
        email: result.user.email,
      });

      console.log("Google user created:", result.user);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.error("Google Sign In Error:", error.message);
    }
  };

  // 🔹 Phone signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid Kenyan phone number");
      return;
    }

    // Normalize phone number to +254 format
    const formattedPhone = phone.startsWith("0")
      ? `+254${phone.substring(1)}`
      : phone.startsWith("254")
      ? `+${phone}`
      : phone;

    // Convert phone to pseudo email
    const pseudoEmail = `${formattedPhone}@myapp.com`;

    try {
      // Create account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        pseudoEmail,
        password
      );

      // Update profile with username
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Save user in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
        phone: formattedPhone,
        email,
      });

      console.log("User created:", userCredential.user);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.error("Signup error:", err.message);
    }
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
              required
            />
            <input
              type="text"
              placeholder="Phone - +254712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="social">
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
  Sign in with Google
</button>
          </div>

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
