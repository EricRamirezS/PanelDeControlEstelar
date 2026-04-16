import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CrewStatus from './CrewStatus';

describe('CrewStatus Component', () => {
  it('renders correctly', () => {
    render(<CrewStatus />);
    expect(screen.getByText(/Estado de Tripulación/i)).toBeInTheDocument();
  });
});
