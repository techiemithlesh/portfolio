import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth, AuthContext } from "../context/AuthContext";




export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/admin/login" />;
  }
  return children;
}
