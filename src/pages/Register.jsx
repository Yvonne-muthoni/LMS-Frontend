import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/user/RegistrationForm";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(""); // Added state for passwordStrength
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(""); // Added this line
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Update password strength based on the new password value
    if (
      newPassword.length >= 8 &&
      /\d/.test(newPassword) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
    ) {
      setPasswordStrength("Strong");
    } else if (newPassword.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      setSuccess(data.message || "User has been created successfully");
      localStorage.setItem("token", data.access_token);

      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin-home");
        } else {
          navigate("/home");
        }
      }, 2000);
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
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
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      passwordStrength={passwordStrength} // Passed this state to RegistrationForm
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      error={error}
      success={success}
    />
  );
}

export default Register;
