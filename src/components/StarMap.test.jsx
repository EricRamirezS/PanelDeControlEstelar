import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StarMap from './StarMap';

describe('StarMap Component', () => {
  it('renders correctly', () => {
    render(<StarMap />);
    expect(screen.getByText(/Mapa Estelar/i)).toBeInTheDocument();
  });

  it('renders planets from mapData', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: 'yellow' },
    ];
    render(<StarMap mapData={mapData} />);
    
    expect(screen.getByTestId('planet-1')).toBeInTheDocument();
    expect(screen.getByTestId('planet-2')).toBeInTheDocument();
  });

  it('positions planets correctly using x and y coordinates', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' },
    ];
    render(<StarMap mapData={mapData} />);
    
    const planet = screen.getByTestId('planet-1');
    expect(planet).toHaveStyle({ left: '20%', top: '50%' });
  });

  it('applies correct colors to planets', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: 'yellow' },
    ];
    render(<StarMap mapData={mapData} />);
    
    const planet1 = screen.getByTestId('planet-1');
    const planet2 = screen.getByTestId('planet-2');
    
    expect(planet1.style.backgroundColor).toBe('red');
    expect(planet2.style.backgroundColor).toBe('yellow');
  });

  it('displays planet names as titles for hover effect', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' },
    ];
    render(<StarMap mapData={mapData} />);
    
    const planet = screen.getByTestId('planet-1');
    expect(planet).toHaveAttribute('title', 'Marte');
  });

  it('renders empty when mapData is empty or not provided', () => {
    const { container } = render(<StarMap />);
    expect(screen.getByText(/Mapa Estelar/i)).toBeInTheDocument();
    expect(container.querySelectorAll('[data-testid^="planet-"]')).toHaveLength(0);
  });

  it('handles multiple planets with different positions', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: 'yellow' },
      { id: 3, name: 'Mercurio', x: 60, y: 70, color: 'gray' },
    ];
    render(<StarMap mapData={mapData} />);
    
    expect(screen.getByTestId('planet-1')).toHaveStyle({ left: '20%', top: '50%' });
    expect(screen.getByTestId('planet-2')).toHaveStyle({ left: '40%', top: '30%' });
    expect(screen.getByTestId('planet-3')).toHaveStyle({ left: '60%', top: '70%' });
  });
});
