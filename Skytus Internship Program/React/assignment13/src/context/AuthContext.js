import { createContext, useState, useEffect } from "react";
import authApi from "../services/authApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // For demo purposes we assume token is valid
      setUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authApi.post("/login", {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);
      setUser({ email, token });

      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}