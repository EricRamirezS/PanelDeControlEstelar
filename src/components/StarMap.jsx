const StarMap = ({ mapData = [] }) => {
  return (
    <div className="glass-card flex flex-col h-full relative overflow-hidden">
      <h2 className="text-xl font-bold text-gray-300 mb-2 z-10">Mapa Estelar</h2>
      <div className="flex-grow bg-black/50 border border-gray-800 rounded relative">
        {mapData.map((planet) => (
          <div
            key={planet.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              backgroundColor: planet.color,
              transform: 'translate(-50%, -50%)',
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
