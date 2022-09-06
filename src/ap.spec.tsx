import { render } from '@testing-library/react';
import App from './App';

test('sum', () => {
  const { getAllByText } = render(<App />);

  expect(getAllByText('React-Setup')).toBeTruthy();
});
