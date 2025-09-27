import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseCon";
import Loader from "../common/loader"; 
import "./pages.css";

// Utility → add days to a date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Format date
const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Find current payout week index
const getCurrentWeekIndex = (startDate, totalMembers) => {
  const today = new Date();
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 0; 
  return Math.min(Math.floor(diffDays / 7), totalMembers - 1);
};

const Payout = () => {
  const [members, setMembers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // static start date of the cycle
  const startDate = new Date("2025-09-27");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          ...doc.data(),
          amount: 168, 
          avatar: `https://i.pravatar.cc/150?img=${index + 10}`,
        }));
        setMembers(users);

        // delay to allow fade-in
        setTimeout(() => setLoaded(true), 300);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchMembers();
  }, []);

  if (members.length === 0) {
    return <Loader />;
  }

  const scheduledMembers = members.map((m, i) => {
    const payoutDate = addDays(startDate, i * 7);
    return {
      ...m,
      date: formatDate(payoutDate),
    };
  });

  const currentWeekIndex = getCurrentWeekIndex(startDate, members.length);

  const orderedMembers = [
    ...scheduledMembers.slice(currentWeekIndex),
    ...scheduledMembers.slice(0, currentWeekIndex),
  ].map((m, i) => ({
    ...m,
    active: i === 0,
  }));

  return (
    <div className={`page fade-in ${loaded ? "show" : ""}`}>
      <h2 className="page-title">Payout Schedule</h2>
      <p className="subtitle">
        Each weekend, one member receives their payout in order.
      </p>

      <div className="schedule-list">
        {orderedMembers.map((member) => (
          <div
            key={member.id}
            className={`schedule-item ${member.active ? "active" : ""}`}
          >
            <div className="avatar">
              <img src={member.avatar} alt={member.username} />
              {member.active && <span className="badge">This Week</span>}
            </div>

            <div className="member-info">
              <h4>{member.username}</h4>
              <p>{member.date}</p>
            </div>

            <div className="amount">
              <strong>Ksh {member.amount}</strong>
              <p>Payout</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payout;
