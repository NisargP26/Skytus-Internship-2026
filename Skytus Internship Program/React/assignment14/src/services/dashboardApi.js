import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export async function fetchDashboardData() {
  const [productsResponse, usersResponse] = await Promise.all([
    api.get('/products?limit=8'),
    api.get('/users?limit=8'),
  ]);

  const products = productsResponse.data.products ?? [];
  const users = usersResponse.data.users ?? [];

  const totalSales = products.reduce((sum, item) => sum + (item.price || 0), 0);

  const overviewData = {
    totalProducts: products.length,
    totalUsers: users.length,
    totalSales: totalSales.toFixed(2),
    activeUsers: users.filter((user) => user?.company).length,
  };

  return {
    overviewData,
    productsData: products,
    usersData: users,
  };
}
