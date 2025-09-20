import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login"; 
import Signup from "./components/auth/signup"; 


import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
        

      
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
