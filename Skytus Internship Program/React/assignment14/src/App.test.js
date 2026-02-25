import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./services/dashboardApi', () => ({
  fetchDashboardData: jest.fn(() =>
    Promise.resolve({
      overviewData: { totalProducts: 8, totalUsers: 8, totalSales: '100.00', activeUsers: 8 },
      productsData: [],
      usersData: [],
    })
  ),
}));

test('renders dashboard sidebar', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { level: 2, name: /dashboard/i });
  expect(titleElement).toBeInTheDocument();
});
