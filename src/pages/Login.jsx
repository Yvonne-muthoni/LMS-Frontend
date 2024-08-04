import React, { useState } from 'react';
import LoginForm from '../components/user/LoginForm';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.access_token);
        navigate(data.user.role === 'admin' ? '/admin-home' : '/home');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default Login;
