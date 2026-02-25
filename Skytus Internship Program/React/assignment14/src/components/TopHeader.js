import { useLocation } from 'react-router-dom';
import { useDashboard } from '../context/DashboardContext';

const pageNames = {
  overview: 'Overview',
  products: 'Products',
  users: 'Users',
};

function TopHeader() {
  const location = useLocation();
  const { refreshData } = useDashboard();
  const pageKey = location.pathname.split('/').pop();
  const pageTitle = pageNames[pageKey] || 'Dashboard';

  return (
    <header className="top-header">
      <div>
        <h1>{pageTitle}</h1>
        <p>Assignment 14: Dashboard UI</p>
      </div>
      <button type="button" className="refresh-btn" onClick={refreshData}>
        Refresh Data
      </button>
    </header>
  );
}

export default TopHeader;
