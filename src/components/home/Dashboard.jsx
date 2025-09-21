import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../config/firebaseCon";
import { FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loan, setLoan] = useState(0);
  const [savings, setSavings] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userRef = doc(db, "users", currentUser.uid);
        const unsubUser = onSnapshot(userRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setUsername(data.username || "");
            setRole(data.role || "");
            setLoan(data.loan || 0);
          }
        });

        const groupRef = doc(db, "group", "general");
        const unsubGroup = onSnapshot(groupRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setSavings(data.savings || 0);
            setNotifications(data.notifications || []);
          }
        });

        return () => {
          unsubUser();
          unsubGroup();
        };
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribeAuth();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {user ? (
        <>
          <div className="card profile-card">
            <div className="card-header">Profile</div>
            <div className="card-body">
              <FaUserCircle size={60} color="#555" />
              <p><strong>Name:</strong> {username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {role}</p>
              <p><strong>Loan:</strong> KES {loan}</p>
            </div>
          </div>

          <div className="card savings-card">
            <div className="card-header">Group Savings</div>
            <div className="card-body">
              <p>KES {savings}</p>
            </div>
          </div>

          <div className="card notifications-card">
            <div className="card-header">Group Notifications</div>
            <div className="card-body">
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((note, idx) => <li key={idx}>{note}</li>)
                ) : (
                  <li>No notifications</li>
                )}
              </ul>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading…</p>
      )}
    </div>
  );
};

export default Dashboard;
