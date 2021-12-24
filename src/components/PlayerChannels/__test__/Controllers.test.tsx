import { render, screen } from '@testing-library/react';
import { Controllers } from '../Controllers';

describe('Controllers component', () => {
  it('renders correctly', () => {
    render(
      <Controllers name="Putin FM" logo="https://i.imgur.com/qkKy8yH.png" />,
    );
    const logo = screen.getByAltText('Putin FM');
    const buttons = screen.getAllByRole('button');
    expect(logo).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it('renders correctly with buttons click', () => {
    const volumeDownFn = jest.fn();
    const volumeUpFn = jest.fn();

    render(
      <Controllers
        name="Putin FM"
        logo="https://i.imgur.com/qkKy8yH.png"
        onVolumeDown={volumeDownFn}
        onVolumeUp={volumeUpFn}
      />,
    );
    const buttons = screen.getAllByRole('button');
    buttons[0].click();
    buttons[1].click();
    expect(buttons.length).toBe(2);
    expect(volumeDownFn).toHaveBeenCalled();
    expect(volumeUpFn).toHaveBeenCalled();
  });
});
