import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendarDate, CiBank } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navigation">
      
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        <IoMdMenu />
      </button>

      <div className={`nav-content ${open ? "show" : "hide"}`}>
        <Link to="/Dashboard">
          <MdDashboard /> Dashboard
        </Link>
        <Link to="/Contributions">
          <AiOutlineDollarCircle /> Contributions
        </Link>
        <Link to="/payouts">
          <CiCalendarDate /> Payouts
        </Link>
        <Link to="/loans">
          <CiBank /> Loans
        </Link>
        <Link to="/settings">
          <IoMdSettings /> Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
