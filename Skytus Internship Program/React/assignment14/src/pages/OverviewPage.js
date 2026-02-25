import ChartPlaceholderCard from '../components/ChartPlaceholderCard';
import PageState from '../components/PageState';
import StatCard from '../components/StatCard';
import { useDashboard } from '../context/DashboardContext';

function OverviewPage() {
  const { overview, loading, error } = useDashboard();

  if (loading || error) {
    return <PageState loading={loading} error={error} />;
  }

  return (
    <section className="page-grid">
      <StatCard title="Total Products" value={overview.totalProducts} subtitle="Current catalog size" />
      <StatCard title="Total Users" value={overview.totalUsers} subtitle="Registered users" />
      <StatCard title="Estimated Sales" value={`$${overview.totalSales}`} subtitle="From fetched product prices" />
      <StatCard title="Active Users" value={overview.activeUsers} subtitle="Users with company details" />
      <ChartPlaceholderCard title="Sales Trend" />
      <ChartPlaceholderCard title="User Growth" />
    </section>
  );
}

export default OverviewPage;
