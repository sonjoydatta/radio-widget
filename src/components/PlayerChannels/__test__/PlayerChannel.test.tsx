import { render, screen } from '@testing-library/react';
import { PlayerChannel } from '../PlayerChannel';

const data = {
  id: '1',
  name: 'Putin FM',
  frequency: '66,6',
  logo: 'https://i.imgur.com/qkKy8yH.png',
};

describe('PlayerChannel component', () => {
  it('renders correctly', () => {
    render(<PlayerChannel {...data} />);
    const name = screen.getByText('Putin FM');
    const frequency = screen.getByText('66,6');
    expect(name).toBeInTheDocument();
    expect(frequency).toBeInTheDocument();
  });
});
