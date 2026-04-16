import { useState, useEffect } from 'react';

const ReactorTemp = () => {
  const [temp, setTemp] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => {
        const fluctuation = Math.floor(Math.random() * 21) - 10; // -10 to +10
        const nextTemp = prev + fluctuation;
        return Math.min(Math.max(nextTemp, 0), 150);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  //TODO: jyjyhnuh un mensaje de "ALERTA CRÍTICA" en rojo solo si la temperatura es > 100.

  return (
    <div className="glass-card flex flex-col justify-center items-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-2" style={{ textShadow: '0 0 5px rgba(57, 255, 20, 0.4)' }}>Temperatura del Reactor</h2>
      <div className="text-3xl font-mono mb-4 text-[var(--retro-green)]" style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.8)' }}>
        {temp}°C
      </div>
      
      <div className="w-full bg-[#051505] rounded-sm h-6 border border-[var(--retro-green)]/30 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
        <div 
          className="h-6 transition-all duration-500" 
          style={{ 
            width: `${(temp / 150) * 100}%`,
            backgroundColor: temp > 100 ? 'var(--emergency-red)' : 'var(--retro-green)',
            boxShadow: temp > 100 ? '0 0 10px var(--emergency-red)' : '0 0 10px var(--retro-green)'
          }}
        ></div>
      </div>

      <div className="mt-4 h-6 w-full text-center">
        {/* Renderiza condicionalmente el mensaje de alerta aquí */}
      </div>
    </div>
  );
};

export default ReactorTemp;
