import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  linkWithCredential,
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseCon";
import "./loginsignup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const phoneRegex = /^(?:\+254|254|0)7\d{8}$/;
  const googleProvider = new GoogleAuthProvider();

  // 🔹 Format phone into pseudo-email
  const formatPhone = (phone) => {
    if (!phoneRegex.test(phone)) return null;
    const formatted =
      phone.startsWith("0")
        ? `+254${phone.substring(1)}`
        : phone.startsWith("254")
        ? `+${phone}`
        : phone;
    return `${formatted}@myapp.com`;
  };

  // 🔹 Google Sign Up
  const handleGoogleSignIn = async () => {
    try {
      if (!phone && !email) {
        setError("Please enter phone or email before using Google signup.");
        return;
      }
      if (!password) {
        setError("Password is required for signup.");
        return;
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 🔹 If email provided → link if already exists
      if (email) {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
          const emailCred = EmailAuthProvider.credential(email, password);
          await linkWithCredential(user, emailCred);
        }
      }

      // 🔹 If phone provided → link as pseudo-email
      if (phone) {
        const pseudoEmail = formatPhone(phone);
        if (pseudoEmail) {
          const phoneCred = EmailAuthProvider.credential(pseudoEmail, password);
          try {
            await linkWithCredential(user, phoneCred);
          } catch (err) {
            if (err.code !== "auth/credential-already-in-use") throw err;
          }
        }
      }

      // Save/Update in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName || username,
        phone: phone || "",
        email: user.email || email,
      });

      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.error("Google Sign In Error:", err.message);
    }
  };

  // 🔹 Email/Password Sign Up
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid Kenyan phone number");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    const pseudoEmail = formatPhone(phone);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      // 🔹 Link phone as pseudo-email
      const phoneCred = EmailAuthProvider.credential(pseudoEmail, password);
      try {
        await linkWithCredential(user, phoneCred);
      } catch (err) {
        if (err.code !== "auth/credential-already-in-use") throw err;
      }

      // Save in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        phone,
        email,
      });

      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.error("Signup error:", err.message);
    }
  };

  return (
    <div className="myBody">
      <div className="myForm">
        <form onSubmit={handleSubmit} autoComplete="on">
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
              autoComplete="username"
              required
            />
            <input
              type="text"
              placeholder="Phone - +254712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
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
                  color: "#333",
                  userSelect: "none",
                }}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="signup-btn">
            Sign Up 
          </button>

          <div className="social">
            <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="google-icon"
              />
              Continue with Google
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
