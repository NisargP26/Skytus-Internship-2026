import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/dashboard/overview', label: 'Overview' },
  { path: '/dashboard/products', label: 'Products' },
  { path: '/dashboard/users', label: 'Users' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
