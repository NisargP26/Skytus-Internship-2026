import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  /* =========================
     useEffect – Initial Load
  ========================= */
  useEffect(() => {
    const initialUsers = [
      { id: 1, name: "Alice", email: "alice@mail.com" },
      { id: 2, name: "Bob", email: "bob@mail.com" }
    ];
    setUsers(initialUsers);
  }, []);

  /* =========================
     CRUD Handlers
  ========================= */
  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const startEdit = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="app">
      <h1>User CRUD App</h1>

      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
