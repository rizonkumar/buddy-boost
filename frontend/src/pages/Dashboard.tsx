import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="bg-white rounded shadow p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="mb-6 text-gray-700">Hello, <b>{user?.name || "User"}</b>!</p>
        <button
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
