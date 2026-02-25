import DataListCard from '../components/DataListCard';
import PageState from '../components/PageState';
import { useDashboard } from '../context/DashboardContext';

function UsersPage() {
  const { users, loading, error } = useDashboard();

  if (loading || error) {
    return <PageState loading={loading} error={error} />;
  }

  return (
    <section className="page-grid single-column">
      <DataListCard
        title="Users"
        items={users}
        emptyText="No users available."
        renderItem={(user) => (
          <div className="item-row">
            <div>
              <h4>
                {user.firstName} {user.lastName}
              </h4>
              <p>{user.email}</p>
            </div>
            <span>{user.company?.title || 'N/A'}</span>
          </div>
        )}
      />
    </section>
  );
}

export default UsersPage;
