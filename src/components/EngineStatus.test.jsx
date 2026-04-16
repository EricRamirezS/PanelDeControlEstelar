import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EngineStatus from './EngineStatus';

describe('EngineStatus Component', () => {
  it('renders correctly', () => {
    render(<EngineStatus />);
    expect(screen.getByText(/Estado de Motores/i)).toBeInTheDocument();
  });
});
