import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../config/firebaseCon"; // make sure storage is exported from firebaseCon
import Loader from "../common/loader"; 
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loan, setLoan] = useState(0);
  const [savings, setSavings] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [loaded, setLoaded] = useState(false);
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

        setTimeout(() => setLoaded(true), 300);

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

  // 🔹 Upload profile picture
  const handleProfileUpload = async (file) => {
    try {
      const storageRef = ref(storage, `profilePics/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      // update firebase auth profile
      await updateProfile(auth.currentUser, { photoURL: url });

      // also update firestore user doc
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { photoURL: url });

      setUser({ ...user, photoURL: url });
    } catch (err) {
      console.error("Profile upload failed:", err);
    }
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <div className={`dashboard fade-in ${loaded ? "show" : ""}`}>
      <div className="card profile-card">
        <div className="card-header">Profile</div>
        <div className="card-body">
          <div className="profile-pic-wrapper">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="profile-pic" />
            ) : (
              <div className="profile-placeholder">+</div>
            )}
            <label htmlFor="profile-upload" className="edit-btn">
              ✎
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files[0]) {
                  handleProfileUpload(e.target.files[0]);
                }
              }}
            />
          </div>

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
    </div>
  );
};

export default Dashboard;
