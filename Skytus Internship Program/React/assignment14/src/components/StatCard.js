function StatCard({ title, value, subtitle }) {
  return (
    <article className="card stat-card">
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
      {subtitle ? <span className="stat-subtitle">{subtitle}</span> : null}
    </article>
  );
}

export default StatCard;
