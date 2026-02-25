import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

// Environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
const LOGIN_ENDPOINT = process.env.REACT_APP_LOGIN_ENDPOINT || '/api/auth/login';
const TOKEN_EXPIRY_HOURS = parseInt(process.env.REACT_APP_TOKEN_EXPIRY_HOURS) || 24;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    const tokenExpiry = localStorage.getItem('tokenExpiry');

    if (storedToken && storedUser && tokenExpiry) {
      const expiryDate = new Date(tokenExpiry);
      const now = new Date();

      if (expiryDate > now) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } else {
        // Token expired, clear storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        localStorage.removeItem('tokenExpiry');
      }
    }
    setLoading(false);
  }, []);

  // Calculate token expiry time
  const getTokenExpiry = () => {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + TOKEN_EXPIRY_HOURS);
    return expiryDate.toISOString();
  };

  // Login function
  const login = async (username, password) => {
    setError(null);
    setLoading(true);

    try {
      // For demo purposes, simulate API call
      // In production, replace with actual API call
      const response = await mockLogin(username, password);
      
      if (response.success) {
        const { token: authToken, user: userData } = response;
        
        // Store token in localStorage (can also use memory)
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('authUser', JSON.stringify(userData));
        localStorage.setItem('tokenExpiry', getTokenExpiry());

        setToken(authToken);
        setUser(userData);
        return { success: true };
      } else {
        setError(response.message || 'Login failed');
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err.message || 'An error occurred during login';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    localStorage.removeItem('tokenExpiry');
    setToken(null);
    setUser(null);
    setError(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!token && !!user;
  };

  // Get auth header for API calls
  const getAuthHeader = () => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const value = {
    user,
    token,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    getAuthHeader,
    clearError: () => setError(null)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Mock login function for demo (simulates API call)
const mockLogin = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Demo credentials: admin/password123
      if (username === 'admin' && password === 'password123') {
        resolve({
          success: true,
          token: 'mock-jwt-token-' + Date.now(),
          user: {
            id: 1,
            username: 'admin',
            email: 'admin@example.com',
            role: 'admin'
          }
        });
      } else if (username === 'user' && password === 'user123') {
        resolve({
          success: true,
          token: 'mock-jwt-token-' + Date.now(),
          user: {
            id: 2,
            username: 'user',
            email: 'user@example.com',
            role: 'user'
          }
        });
      } else {
        resolve({
          success: false,
          message: 'Invalid username or password'
        });
      }
    }, 1000); // Simulate network delay
  });
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
