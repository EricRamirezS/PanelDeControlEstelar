import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CorePowerGrid from './CorePowerGrid';

describe('CorePowerGrid Component', () => {
  it('renders its title correctly', () => {
    render(<CorePowerGrid />);
    expect(screen.getByText(/NÚCLEO DE ENERGÍA/i)).toBeInTheDocument();
  });
});
