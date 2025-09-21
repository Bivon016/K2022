import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/login"; 
import Signup from "./components/auth/signup"; 
import ResetPassword from "./components/auth/resetpassword";
import Dashboard from "./components/home/dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<PrivateRoute element={<Dashboard/>} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
