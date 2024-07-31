import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './components/user/ LoginForm';
import RegistrationForm from './components/user/RegistrationForm';
import ProfileForm from './components/user/ProfileForm';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App