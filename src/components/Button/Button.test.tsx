import { render, screen } from '@testing-library/react';
import { Button } from './index';

test('this should render a button', () => {
  render(<Button>Click Here</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
