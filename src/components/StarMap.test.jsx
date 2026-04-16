import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StarMap from './StarMap';

describe('StarMap Component', () => {
  it('renders correctly', () => {
    render(<StarMap />);
    expect(screen.getByText(/Mapa Estelar/i)).toBeInTheDocument();
  });
});
