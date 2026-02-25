import { NavLink, Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';

function DashboardLayout({ usersCount }) {
  return (
    <div className="d-flex min-vh-100">
      <aside className="bg-dark text-light p-3 sidebar-width">
        <h4 className="mb-4">Admin Panel</h4>
        <nav className="nav flex-column gap-2">
          <NavLink to="/dashboard/overview" className={({ isActive }) => navClass(isActive)}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/products" className={({ isActive }) => navClass(isActive)}>
            Products
          </NavLink>
          <NavLink to="/dashboard/users" className={({ isActive }) => navClass(isActive)}>
            Users
          </NavLink>
        </nav>
      </aside>

      <div className="flex-grow-1 bg-body-tertiary">
        <HeaderBar usersCount={usersCount} />
        <main className="container-fluid p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function navClass(isActive) {
  return `nav-link rounded px-3 py-2 ${isActive ? 'bg-primary text-white' : 'text-light-subtle'}`;
}

export default DashboardLayout;
