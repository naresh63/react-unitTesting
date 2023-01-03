import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const fromRadio = screen.getByLabelText(/from/i)
  const toRadio = screen.getByLabelText(/to/i)
  const fnameInput = screen.getByLabelText(/First name:/i)
  const lnameInput = screen.getByLabelText(/Last name:/i)
  expect(fromRadio).toBeVisible()
  expect(toRadio).toBeVisible()
   expect(fnameInput).toBeInTheDocument()
   expect(lnameInput).toBeInTheDocument()
});
