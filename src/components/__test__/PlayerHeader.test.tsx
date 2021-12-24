import { render, screen } from '@testing-library/react';
import { PlayerHeader } from '../PlayerHeader';

describe('PlayerHeader component', () => {
  it('back button', () => {
    render(<PlayerHeader />);
    const backButton = screen.getAllByRole('button')[0];
    expect(backButton).toBeInTheDocument();
  });

  it('back button click', () => {
    const mockFn = jest.fn();
    render(<PlayerHeader onBack={mockFn} />);
    const backButton = screen.getAllByRole('button')[0];
    backButton.click();
    expect(mockFn).toHaveBeenCalled();
  });

  it('title', () => {
    render(<PlayerHeader />);
    const title = screen.getByText('Stations');
    expect(title).toBeInTheDocument();
  });

  it('switch button', () => {
    render(<PlayerHeader />);
    const switchButton = screen.getAllByRole('button')[1];
    expect(switchButton).toBeInTheDocument();
  });

  it('switch button disabled', () => {
    render(<PlayerHeader disabledSwitch />);
    const switchButton = screen.getAllByRole('button')[1];
    expect(switchButton).toBeDisabled();
  });

  it('switch button click', () => {
    const mockFn = jest.fn();
    render(<PlayerHeader onSwitch={mockFn} />);
    const switchButton = screen.getAllByRole('button')[1];
    switchButton.click();
    expect(mockFn).toHaveBeenCalled();
  });

  it('switch button disabled click', () => {
    const mockFn = jest.fn();
    render(<PlayerHeader onSwitch={mockFn} disabledSwitch />);
    const switchButton = screen.getAllByRole('button')[1];
    switchButton.click();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
