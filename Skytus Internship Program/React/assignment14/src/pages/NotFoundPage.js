import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>This route does not exist.</p>
      <Link to="/dashboard/overview">Go to Dashboard</Link>
    </main>
  );
}

export default NotFoundPage;
