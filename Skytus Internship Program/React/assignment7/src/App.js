import { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Arun", active: true },
    { id: 2, name: "Bharat", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "Diana", active: false },
  ]);

  // Toggle active / inactive status
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, active: !user.active }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="app">
      <h1>User List</h1>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <p className="empty">No users available</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              toggleStatus={toggleStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
