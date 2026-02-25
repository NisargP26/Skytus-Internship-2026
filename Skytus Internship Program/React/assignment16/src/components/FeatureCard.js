import { memo } from 'react';

const FeatureCard = memo(function FeatureCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">{description}</p>
      <button
        type="button"
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        Learn More
      </button>
    </article>
  );
});

export default FeatureCard;
