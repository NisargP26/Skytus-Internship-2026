import { useCallback, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardsGrid from './components/CardsGrid';
import Footer from './components/Footer';

const featuresData = [
  {
    id: 1,
    title: 'Analytics',
    description: 'Track dashboard metrics in real time with responsive cards.',
  },
  {
    id: 2,
    title: 'Collaboration',
    description: 'Manage teams and project updates from a clean control panel.',
  },
  {
    id: 3,
    title: 'Automation',
    description: 'Reduce manual work with workflow automation modules.',
  },
  {
    id: 4,
    title: 'Security',
    description: 'Built-in controls to secure accounts and data access.',
  },
  {
    id: 5,
    title: 'Reports',
    description: 'Generate weekly and monthly performance summaries fast.',
  },
  {
    id: 6,
    title: 'Integrations',
    description: 'Connect popular business tools in a few clicks.',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleSectionSelect = useCallback((section) => {
    setActiveSection(section);
  }, []);

  const cards = useMemo(() => featuresData, []);

  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <Navbar activeSection={activeSection} onSectionSelect={handleSectionSelect} />
      <HeroSection activeSection={activeSection} />
      <CardsGrid cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
