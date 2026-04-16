/**
 * StarMap Component - Renderiza un mapa estelar interactivo
 * 
 * Props:
 * - mapData: Array de planetas con estructura { id, name, x, y, color }
 *   Color puede ser: hex, rgb, o variables CSS como var(--retro-green)
 * 
 * Variables de color disponibles:
 * - var(--retro-green): #39ff14 - Bordes, brillos, textos
 * - var(--system-green): #00ff66 - Sistemas en línea/óptimos
 * - var(--emergency-red): #ff3333 - Advertencias y alertas
 */
const StarMap = ({ mapData = [] }) => {
  return (
    <div className="glass-card flex flex-col h-full relative overflow-hidden">
      <h2 className="text-xl font-bold mb-2 z-10" style={{ color: 'var(--retro-green)' }}>Mapa Estelar</h2>
      <div className="flex-grow bg-black/50 border rounded relative" style={{ borderColor: 'rgba(57, 255, 20, 0.3)' }}>
        {mapData.map((planet) => (
          <div
            key={planet.id}
            className="absolute w-3 h-3 rounded-full shadow-lg"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              backgroundColor: planet.color,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 8px ${planet.color}, 0 0 12px ${planet.color}40`,
            }}
            title={planet.name}
            data-testid={`planet-${planet.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarMap;
