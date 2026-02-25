import { memo } from 'react';
import FeatureCard from './FeatureCard';

const CardsGrid = memo(function CardsGrid({ cards }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 md:pb-16 lg:px-8 xl:pb-20">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Feature Grid</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:gap-6">
        {cards.map((card) => (
          <FeatureCard key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
});

export default CardsGrid;
