import { memo } from 'react';

const navItems = ['Home', 'Features', 'Pricing', 'Contact'];

const Navbar = memo(function Navbar({ activeSection, onSectionSelect }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <h1 className="text-xl font-bold text-brand">Tailwind Dashboard</h1>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onSectionSelect(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item
                  ? 'bg-brand text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default Navbar;
