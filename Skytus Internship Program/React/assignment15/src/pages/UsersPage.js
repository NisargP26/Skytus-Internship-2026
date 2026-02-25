import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';

function UsersPage({ users, onAddUser }) {
  return (
    <section className="row g-3">
      <div className="col-lg-5">
        <UserForm onAddUser={onAddUser} />
      </div>
      <div className="col-lg-7">
        <UserTable users={users} />
      </div>
    </section>
  );
}

export default UsersPage;
