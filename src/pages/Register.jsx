import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator"; // Ensure this is correctly imported
import RegistrationForm from "../components/user/RegistrationForm";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle password changes and update strength
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Example logic for password strength; adjust as needed
    setPasswordStrength(newPassword.length > 8 ? "Strong" : "Weak");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        navigate("/home");
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <RegistrationForm
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      role={role}
      setRole={setRole}
      handleSubmit={handleSubmit}
      error={error}
      success={success}
    />
  );
};

export default Register;
