// RegistrationForm.js
import React from 'react';


function RegistrationForm({ username, setUsername, email, setEmail, handleSubmit, error, success }) {
  return (
    <div className="w-1/2 p-8">
      <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-coral-500 hover:bg-coral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs mt-4">
        By signing up to create an account I accept<br />
        Company's Terms of use & Privacy Policy.
      </p>
    </div>
  );
}

export default RegistrationForm;
