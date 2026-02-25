import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Responsive Layouts with Tailwind CSS/i);
  expect(heading).toBeInTheDocument();
});
