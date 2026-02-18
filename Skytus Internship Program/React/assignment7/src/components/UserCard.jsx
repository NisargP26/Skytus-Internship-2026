function UserCard({ user, toggleStatus }) {
  return (
    <div className={`user-card ${user.active ? "active" : ""}`}>
      <h3>{user.name}</h3>

      <p>Status: {user.active ? "Active" : "Inactive"}</p>

      <button onClick={() => toggleStatus(user.id)}>
        {user.active ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default UserCard;
