import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavigationAI from './NavigationAI';

describe('NavigationAI Component', () => {
  it('renders correctly', () => {
    render(<NavigationAI />);
    expect(screen.getByText(/IA de Navegación/i)).toBeInTheDocument();
  });
});
