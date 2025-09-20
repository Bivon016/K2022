// src/components/auth/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebaseCon";
import { onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ element }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
