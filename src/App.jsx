import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/login"; 
import Signup from "./components/auth/signup"; 
import Dashboard from "./components/home/dashboard";
import Navbar from "./components/home/navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
          {/* 👇 this makes "/" show Dashboard */}
          <Route
            path="/"
            element={<PrivateRoute element={<Dashboard />} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
