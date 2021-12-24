import { render, screen } from '@testing-library/react';
import { PlayerDisplay } from '../PlayerDisplay';

describe('PlayerDisplay component', () => {
  it('title', () => {
    render(<PlayerDisplay name="Dribbble FM" />);
    const title = screen.getByText('Currently playing');
    const name = screen.getByText('Dribbble FM');
    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
