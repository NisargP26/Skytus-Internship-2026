import Button from "./Button";

function UserItem({ user, deleteUser, startEdit }) {
  return (
    <div className="item">
      <div>
        <strong>{user.name}</strong>
        <p>{user.email}</p>
      </div>

      <div className="actions">
        <Button text="Edit" onClick={() => startEdit(user)} />
        <Button text="Delete" onClick={() => deleteUser(user.id)} />
      </div>
    </div>
  );
}

export default UserItem;
