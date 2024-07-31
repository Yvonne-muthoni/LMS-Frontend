import React from "react";
import { Link } from "react-router-dom";
import COVER_Login from "/src/assets/images/COVER_Login.jpg";

function LoginForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleSubmit,
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-600">
              Log in
            </h2>
          </div>
          {error && <p className="text-center text-red-600">{error}</p>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md space-y-3">
              <div>
                <label htmlFor="user" className="sr-only">
                  Username
                </label>
                <input
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="user"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full max-w-xs mx-auto flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                LOGIN
              </button>
            </div>
          </form>
          <div className="text-sm text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link
              to="/register"
              className="font-medium text-orange-600 hover:text-orange-500"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${COVER_Login})` }}
      ></div>
    </div>
  );
}

export default LoginForm;
