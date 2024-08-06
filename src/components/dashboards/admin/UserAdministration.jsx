import React, { useState } from 'react';

const UserAdministration = ({ addActivity }) => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(`User ${username} (${email}) was added.`);
    setUsername('');
    setEmail('');
    setShowForm(false);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showForm ? 'Hide Form' : 'Add New User'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default UserAdministration;
