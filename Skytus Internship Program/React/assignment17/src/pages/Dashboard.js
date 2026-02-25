import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, token } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Dashboard</h1>
        
        <div className="card">
          <h2 className="card-title">Welcome to Your Dashboard</h2>
          <p className="welcome-message">
            Hello, <strong>{user?.username}</strong>! You have successfully logged in.
            This is a protected page that only authenticated users can access.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">User Information</h2>
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
          <h2 className="card-title">Session Information</h2>
          <div className="info-item">
            <span className="info-label">Token Status:</span>
            <span className="info-value" style={{ color: token ? 'green' : 'red' }}>
              {token ? 'Active' : 'Inactive'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Token (Preview):</span>
            <span className="info-value" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
              {token ? `${token.substring(0, 20)}...` : 'No token'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
