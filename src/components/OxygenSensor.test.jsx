import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OxygenSensor from './OxygenSensor';

describe('OxygenSensor Component', () => {
  it('renders correctly', () => {
    render(<OxygenSensor />);
    expect(screen.getByText(/Sensor de Oxígeno/i)).toBeInTheDocument();
  });
});
