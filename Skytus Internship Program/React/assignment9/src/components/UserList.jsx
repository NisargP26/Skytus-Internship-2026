import UserItem from "./UserItem";

function UserList({ users, deleteUser, startEdit }) {
  if (users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <div className="list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
}

export default UserList;
