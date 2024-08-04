import React from "react";
import { Link } from "react-router-dom";
import welcome from "/src/assets/images/welcome.jpg";

function RegistrationForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
  error,
  success,
  handleSubmit,
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${welcome})` }}
      ></div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-4xl font-extrabold text-gray-900">
              SkillQuest
              <span role="img" aria-label="brain">
                🧠
              </span>
            </h1>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="py-2 px-4 bg-gray-100 text-gray-700 rounded-md font-semibold"
            >
              Sign In
            </Link>
            <button className="py-2 px-4 bg-red-500 text-white rounded-md font-semibold">
              Sign Up
            </button>
          </div>
          {error && <p className="text-center text-red-600">{error}</p>}
          {success && <p className="text-center text-green-600">{success}</p>}
          <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-bold text-black"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-black"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-black"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-bold text-black"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full max-w-xs mx-auto flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Create Account
              </button>
            </div>
          </form>
 
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
