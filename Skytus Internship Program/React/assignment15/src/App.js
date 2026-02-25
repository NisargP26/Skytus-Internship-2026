import { lazy, Suspense, useCallback, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import LoadingFallback from './components/LoadingFallback';

const UsersPage = lazy(() => import('./pages/UsersPage'));

const initialUsers = [
  { id: 1, name: 'Aarav Shah', email: 'aarav@company.com', role: 'Admin' },
  { id: 2, name: 'Riya Verma', email: 'riya@company.com', role: 'Editor' },
  { id: 3, name: 'Karan Patel', email: 'karan@company.com', role: 'Viewer' },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = useCallback((data) => {
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), name: data.name, email: data.email, role: data.role },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
      <Route path="/dashboard" element={<DashboardLayout usersCount={users.length} />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<OverviewPage usersCount={users.length} />} />
        <Route path="products" element={<ProductsPage />} />
        <Route
          path="users"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <UsersPage users={users} onAddUser={addUser} />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard/overview" replace />} />
    </Routes>
  );
}

export default App;
