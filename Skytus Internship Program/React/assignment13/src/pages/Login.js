import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

if (user) {
  return <Navigate to="/dashboard" />;
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

 return (
  <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);
}

export default Login;