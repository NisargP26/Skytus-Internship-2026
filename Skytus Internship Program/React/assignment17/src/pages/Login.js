import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const { login, error, isAuthenticated, loading, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // Clear error on component mount
  useEffect(() => {
    clearError();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!username.trim() || !password.trim()) {
      setLocalError('Please enter both username and password');
      return;
    }

    const result = await login(username, password);
    
    if (result.success) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } else {
      setLocalError(result.message);
    }
  };

  const displayError = localError || error;

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        
        {displayError && (
          <div className="error-message">
            {displayError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={loading}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
          <p>Demo Credentials:</p>
          <p>Admin: admin / password123</p>
          <p>User: user / user123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
