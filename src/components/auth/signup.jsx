import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseCon"; // adjust path to your config
import "./loginsignup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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

    // 🔹 Normalize phone number to +254 format
    const formattedPhone = phone.startsWith("0")
      ? `+254${phone.substring(1)}`
      : phone.startsWith("254")
      ? `+${phone}`
      : phone;

    // 🔹 Convert phone to pseudo email for Firebase Auth
    const pseudoEmail = `${formattedPhone}@myapp.com`;

    try {
      // Create account in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        pseudoEmail,
        password
      );

      // Save user details in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
        phone: formattedPhone,
        email,
      });

      console.log("User created:", userCredential.user);

      navigate("/"); // redirect to homepage after signup
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
