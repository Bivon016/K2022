// Loans.jsx
import React from "react";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="loans-page">
      <div className="container">
        <div className="title">
          <h1>My Loans</h1>
        </div>
        <div className="card-container">
          <div className="loans-card">
            <h3><span>Loans :</span>Ksh 300</h3>
            <h3><span>Status :</span> Approved</h3>
            <h3><span>Repayment Date :</span>12/03/2025</h3>
            <h3><span>Interest Rate :</span>10%</h3>
            <h3><span>Total repayment :</span> ksh 350</h3>
          </div>

          <div className="repayment">
            <h3><span>Amount Paid</span> Ksh 0</h3>
            <h3><span>Amount Remaining</span> Ksh 300</h3>
            <h3><span>Payment Due</span> 12/03/2025</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
