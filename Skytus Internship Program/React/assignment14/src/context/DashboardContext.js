import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchDashboardData } from '../services/dashboardApi';

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  const [overview, setOverview] = useState(null);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadDashboardData = async () => {
    setLoading(true);
    setError('');

    try {
      const { overviewData, productsData, usersData } = await fetchDashboardData();
      setOverview(overviewData);
      setProducts(productsData);
      setUsers(usersData);
    } catch (err) {
      setError(err.message || 'Failed to load dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const value = useMemo(
    () => ({
      overview,
      products,
      users,
      loading,
      error,
      refreshData: loadDashboardData,
    }),
    [overview, products, users, loading, error]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
}
