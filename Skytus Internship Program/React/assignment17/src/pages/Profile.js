import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Profile</h1>
        
        <div className="card">
          <h2 className="card-title">Profile Details</h2>
          <div className="info-item">
            <span className="info-label">User ID:</span>
            <span className="info-value">{user?.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Username:</span>
            <span className="info-value">{user?.username}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Role:</span>
            <span className="info-value">{user?.role}</span>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Account Settings</h2>
          <p className="welcome-message">
            This is your profile page. Here you can view and manage your account settings.
            This is a protected route that requires authentication.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Security</h2>
          <div className="info-item">
            <span className="info-label">Authentication Status:</span>
            <span className="info-value" style={{ color: 'green' }}>Authenticated</span>
          </div>
          <div className="info-item">
            <span className="info-label">Session:</span>
            <span className="info-value">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
