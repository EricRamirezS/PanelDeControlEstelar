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
      { id: 1, name: 'Marte', x: 20, y: 50, color: '#ff3333' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: '#ffff00' },
    ];
    render(<StarMap mapData={mapData} />);
    
    expect(screen.getByTestId('planet-1')).toBeInTheDocument();
    expect(screen.getByTestId('planet-2')).toBeInTheDocument();
  });

  it('positions planets correctly using x and y coordinates', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: '#ff3333' },
    ];
    render(<StarMap mapData={mapData} />);
    
    const planet = screen.getByTestId('planet-1');
    expect(planet).toHaveStyle({ left: '20%', top: '50%' });
  });

  it('applies correct colors to planets', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: '#ff3333' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: '#ffff00' },
    ];
    render(<StarMap mapData={mapData} />);
    
    const planet1 = screen.getByTestId('planet-1');
    const planet2 = screen.getByTestId('planet-2');
    
    // Navegador convierte hex a rgb automáticamente
    expect(planet1.style.backgroundColor).toBe('rgb(255, 51, 51)');
    expect(planet2.style.backgroundColor).toBe('rgb(255, 255, 0)');
  });

  it('displays planet names as titles for hover effect', () => {
    const mapData = [
      { id: 1, name: 'Marte', x: 20, y: 50, color: '#ff3333' },
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
      { id: 1, name: 'Marte', x: 20, y: 50, color: '#ff3333' },
      { id: 2, name: 'Venus', x: 40, y: 30, color: '#ffff00' },
      { id: 3, name: 'Mercurio', x: 60, y: 70, color: '#808080' },
    ];
    render(<StarMap mapData={mapData} />);
    
    expect(screen.getByTestId('planet-1')).toHaveStyle({ left: '20%', top: '50%' });
    expect(screen.getByTestId('planet-2')).toHaveStyle({ left: '40%', top: '30%' });
    expect(screen.getByTestId('planet-3')).toHaveStyle({ left: '60%', top: '70%' });
  });

  it('supports CSS variables for planet colors', () => {
    const mapData = [
      { id: 1, name: 'Sistema Activo', x: 25, y: 45, color: 'var(--system-green)' },
      { id: 2, name: 'Zona de Alerta', x: 50, y: 60, color: 'var(--emergency-red)' },
      { id: 3, name: 'Punto de Interes', x: 75, y: 35, color: 'var(--retro-green)' },
    ];
    render(<StarMap mapData={mapData} />);
    
    expect(screen.getByTestId('planet-1')).toBeInTheDocument();
    expect(screen.getByTestId('planet-2')).toBeInTheDocument();
    expect(screen.getByTestId('planet-3')).toBeInTheDocument();
  });
});
