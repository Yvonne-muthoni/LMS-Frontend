import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const UserAdministration = ({ addActivity }) => {
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name: userName, email: userEmail };
    setUsers([newUser, ...users]);
    addActivity(`User "${userName}" was added.`);
    setUserName('');
    setUserEmail('');
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    addActivity(`User "${users[index].name}" was deleted.`);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="bg-[#FF6247] text-white px-4 py-2 rounded hover:bg-[#FF3E3E] transition"
      >
        {showForm ? 'Hide Form' : 'Add New User'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">User Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter user name" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">User Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter user email" 
              value={userEmail} 
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-[#FF6247] text-white px-4 py-2 rounded hover:bg-[#FF3E3E] transition"
          >
            Submit
          </button>
        </form>
      )}
      {users.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">User List</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                <div>
                  <h4 className="font-medium">{user.name}</h4>
                  <p>{user.email}</p>
                </div>
                <button 
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserAdministration;
