import React, { useState } from "react";
import { AuthForm } from "../components/auth/AuthForm";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (data: { email: string; password: string; name?: string }) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setError(result.message || "Registration failed");
      } else {
        // Store token and redirect
        localStorage.setItem("token", result.data.token);
        navigate("/");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <AuthForm type="register" onSubmit={handleRegister} loading={loading} error={error} />
    </div>
  );
};

export default RegisterPage;
