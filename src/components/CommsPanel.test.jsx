import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CommsPanel from './CommsPanel';

describe('CommsPanel Component', () => {
  it('renders correctly', () => {
    render(<CommsPanel />);
    expect(screen.getByText(/Panel de Comunicaciones/i)).toBeInTheDocument();
  });
});
