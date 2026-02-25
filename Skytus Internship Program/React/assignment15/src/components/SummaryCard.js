import { memo } from 'react';

const SummaryCard = memo(function SummaryCard({ title, value, hint }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <p className="text-muted mb-2">{title}</p>
        <h3 className="mb-1">{value}</h3>
        <small className="text-secondary">{hint}</small>
      </div>
    </div>
  );
});

export default SummaryCard;
