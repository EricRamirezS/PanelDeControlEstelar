import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GravityControl from './GravityControl';

describe('GravityControl Component', () => {
  it('renders correctly', () => {
    render(<GravityControl />);
    expect(screen.getByText(/Control de Gravedad/i)).toBeInTheDocument();
  });
});
