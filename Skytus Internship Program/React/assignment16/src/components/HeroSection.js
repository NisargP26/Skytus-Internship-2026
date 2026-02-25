import { memo } from 'react';

const HeroSection = memo(function HeroSection({ activeSection }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 xl:py-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-cyan-500 p-6 text-white sm:p-8 md:p-10 lg:p-12">
        <p className="text-sm uppercase tracking-wider text-cyan-100">Assessment 16</p>
        <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Responsive Layouts with Tailwind CSS
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-cyan-50 sm:text-base md:text-lg">
          Utility-first responsive design using <span className="font-semibold">sm, md, lg, xl</span>{' '}
          breakpoints and reusable memoized components.
        </p>
        <div className="mt-6 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
          Active section: {activeSection}
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
