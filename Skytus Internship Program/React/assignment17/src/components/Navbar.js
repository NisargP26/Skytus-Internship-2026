import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Auth System
        </Link>
      </div>
      <div className="navbar-links">
        {isAuthenticated() ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <span style={{ margin: '0 0.5rem' }}>|</span>
            <span>Welcome, {user?.username}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
