import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReactorTemp from './ReactorTemp';

describe('ReactorTemp Component', () => {
  it('renders correctly', () => {
    render(<ReactorTemp />);
    expect(screen.getByText(/Temperatura del Reactor/i)).toBeInTheDocument();
  });
});
