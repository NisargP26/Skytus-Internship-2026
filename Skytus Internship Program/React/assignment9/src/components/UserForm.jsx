import { useState, useEffect, useRef } from "react";
import Button from "./Button";

function UserForm({ addUser, updateUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Uncontrolled input (focus)
  const nameInputRef = useRef(null);

  /* =========================
     Focus & Edit Mode
  ========================= */
  useEffect(() => {
    nameInputRef.current.focus();

    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") return;

    if (editingUser) {
      updateUser({ ...editingUser, name, email });
    } else {
      addUser({ name, email });
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        ref={nameInputRef}               // uncontrolled (ref)
        type="text"
        placeholder="Name"
        value={name}                     // controlled
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}                    // controlled
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button text={editingUser ? "Update User" : "Add User"} />
    </form>
  );
}

export default UserForm;
