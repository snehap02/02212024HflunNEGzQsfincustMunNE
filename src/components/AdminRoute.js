import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";

function AdminRoute({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    try {
      const response = await fetch("/api/auth/me"); // Example API endpoint
      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getUserInfo();
    }
  }, []);

  if (!user) return null;

  return user.isAdmin ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-gray-600">You are not authorized to access this page.</p>
    </div>
  );
}

export default AdminRoute;
