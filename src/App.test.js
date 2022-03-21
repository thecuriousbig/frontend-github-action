import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders example string', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/example string/i);
  expect(paragraphElement).toBeInTheDocument();
});
