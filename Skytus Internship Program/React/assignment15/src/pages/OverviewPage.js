import SummaryCard from '../components/SummaryCard';

function OverviewPage({ usersCount }) {
  const cards = [
    { title: 'Revenue', value: '$24,300', hint: 'This month' },
    { title: 'Orders', value: '1,248', hint: 'Active orders' },
    { title: 'Users', value: usersCount, hint: 'System users' },
  ];

  return (
    <section>
      <div className="row g-3">
        {cards.map((card) => (
          <div className="col-md-4" key={card.title}>
            <SummaryCard title={card.title} value={card.value} hint={card.hint} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OverviewPage;
