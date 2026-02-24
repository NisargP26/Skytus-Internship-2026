import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { logout } = useContext(AuthContext);

 return (
  <div className="dashboard">
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  </div>
);
}

export default Dashboard;