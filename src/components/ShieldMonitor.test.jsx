import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShieldMonitor from './ShieldMonitor';

describe('ShieldMonitor Component', () => {
  it('renders correctly', () => {
    render(<ShieldMonitor />);
    expect(screen.getByText(/Monitor de Escudos/i)).toBeInTheDocument();
  });
});
