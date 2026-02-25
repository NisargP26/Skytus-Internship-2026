import { memo } from 'react';

const HeaderBar = memo(function HeaderBar({ usersCount }) {
  return (
    <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
      <div>
        <h5 className="mb-0">Assessment 15: Admin Dashboard</h5>
        <small className="text-muted">Reusable components, forms and optimized rendering</small>
      </div>
      <span className="badge bg-primary-subtle text-primary-emphasis fs-6">
        Total Users: {usersCount}
      </span>
    </header>
  );
});

export default HeaderBar;
