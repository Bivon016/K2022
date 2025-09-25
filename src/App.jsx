import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/login"; 
import Signup from "./components/auth/signup"; 
import ResetPassword from "./components/auth/resetpassword";
import Dashboard from "./components/home/dashboard";
import Navbar from "./components/home/Navbar";
import Contribution from "./components/pages/Contributions";
import Loans from "./components/pages/loans";
import Payout from "./components/pages/payout";
import Settings from "./components/pages/settings";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Private routes */}
          <Route path="/" element={<PrivateRoute element={<><Navbar /><Dashboard /></>} />} />
          <Route path="/dashboard" element={<PrivateRoute element={<><Navbar /><Dashboard /></>} />} />
          <Route path="/contributions" element={<PrivateRoute element={<><Navbar /><Contribution /></>} />} />
          <Route path="/payout" element={<PrivateRoute element={<><Navbar /><Payout /></>} />} />
          <Route path="/loans" element={<PrivateRoute element={<><Navbar /><Loans /></>} />} />
          <Route path="/settings" element={<PrivateRoute element={<><Navbar /><Settings /></>} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
