import React, { useState } from "react";
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Implement more robust password strength logic here
    setPasswordStrength(newPassword.length > 8 ? "Strong" : "Weak");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement sign up logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-coral-500 focus:border-coral-500"
          placeholder="Your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-coral-500 focus:border-coral-500"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-coral-500 focus:border-coral-500"
          placeholder="Create a password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <PasswordStrengthIndicator strength={passwordStrength} />
      <div className="text-xs text-gray-600">
        <ul className="list-disc list-inside space-y-1">
          <li>Cannot contain your name or email address</li>
          <li>At least 8 characters</li>
          <li>Contains a number or symbol</li>
        </ul>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-coral-500 hover:bg-coral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500 transition-colors duration-200"
      >
        Create Account
      </button>
      <p className="text-xs text-center text-gray-500">
        By signing up, you agree to our Terms of use & Privacy Policy.
      </p>
    </form>
  );
};

export default RegistrationForm;
