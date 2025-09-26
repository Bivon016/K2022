import React from "react";
import "./Contributions.css";

const Contributions = () => {
  return (
    <div className="container">
    
      <div className="payment-weekly">
        <h2>Pay Contribution</h2>
        <p>Your weekly contribution of KES 20 will be paid via M-PESA STK push.</p>
        <button className="pay-btn">Pay KES 20 Now</button>
      </div>

       
      <div className="payment">
        <h2>Pay Contribution</h2>
        <p>Your monthly contribution of KES 50 will be paid via M-PESA STK push.</p>
        <button className="pay-btn">Pay KES 50 Now</button>
      </div>

      <div className="history">
        <h3>Contribution History</h3>
        <div className="history-item">
          <span className="amount">KES 20</span>
          <span className="status">Paid</span>
          <span className="date">Sep 20, 2024</span>
        </div>
        <div className="history-item">
          <span className="amount">KES 50</span>
          <span className="status">Paid</span>
          <span className="date">Aug 20, 2024</span>
        </div>
        <div className="history-item">
          <span className="amount">KES 20</span>
          <span className="status">Paid</span>
          <span className="date">Jul 13, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
