import React from "react";
import "./pages.css";

const members = [
  { id: 1, name: "Sophia Carter", amount: 168 },
  { id: 2, name: "Ethan Bennett", amount: 168 },
  { id: 3, name: "Olivia Hayes", amount: 168 },
  { id: 4, name: "Noah Thompson", amount: 168 },
  { id: 5, name: "Ava Mitchell", amount: 168 },
  { id: 6, name: "Liam Foster", amount: 168 },
  { id: 7, name: "Mia Johnson", amount: 168 },
  { id: 8, name: "Daniel Smith", amount: 168 },
  { id: 9, name: "Ella Brown", amount: 168 },
  { id: 10, name: "James Wilson", amount: 168 },
  { id: 11, name: "Grace Taylor", amount: 168 },
];

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
  if (diffDays < 0) return 0; // before first payout → show first member
  return Math.min(Math.floor(diffDays / 7), totalMembers - 1);
};

const Payout = () => {
  const startDate = new Date("2025-09-27"); // static date (adjust manually if needed)

  // assign dates to members
  const scheduledMembers = members.map((m, i) => {
    const payoutDate = addDays(startDate, i * 7);
    return {
      ...m,
      date: formatDate(payoutDate),
    };
  });

  // figure out which member is active now
  const currentWeekIndex = getCurrentWeekIndex(startDate, members.length);

  // reorder: active member first, then the rest
  const orderedMembers = [
    ...scheduledMembers.slice(currentWeekIndex),
    ...scheduledMembers.slice(0, currentWeekIndex),
  ].map((m, i) => ({
    ...m,
    active: i === 0, // first in reordered list is active
  }));

  return (
    <div className="page">
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
              <img
                src={`https://i.pravatar.cc/150?img=${member.id + 10}`}
                alt={member.name}
              />
              {member.active && <span className="badge">This Week</span>}
            </div>

            <div className="member-info">
              <h4>{member.name}</h4>
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
