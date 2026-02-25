function PageState({ loading, error }) {
  if (loading) {
    return <p className="page-state">Loading dashboard data...</p>;
  }

  if (error) {
    return <p className="page-state error">{error}</p>;
  }

  return null;
}

export default PageState;
