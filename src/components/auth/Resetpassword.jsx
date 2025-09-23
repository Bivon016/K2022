import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";
import { auth } from "../../config/firebaseCon";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [oobCode, setOobCode] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Extract oobCode from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("oobCode");
    if (code) {
      setOobCode(code);
      verifyPasswordResetCode(auth, code)
        .then(() => {
          console.log("Reset code verified");
        })
        .catch(() => {
          setError("Invalid or expired reset link.");
        });
    } else {
      setError("Invalid reset link.");
    }
  }, [location]);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password reset successful! You can now log in.");
      setTimeout(() => navigate("/login"), 2500); // redirect after success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="myBody">
      <div className="myForm">
        <h1>Reset Password</h1>
        <p>Please enter your new password below.</p>

        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}

          <button type="submit" className="login-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
