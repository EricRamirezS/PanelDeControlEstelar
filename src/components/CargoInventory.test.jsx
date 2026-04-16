import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CargoInventory from './CargoInventory';

describe('CargoInventory Component', () => {
  it('renders its title correctly', () => {
    render(<CargoInventory />);
    expect(screen.getByText(/Inventario de Carga/i)).toBeInTheDocument();
  });
});
