import { useState, useEffect } from 'react';

const ShieldMonitor = () => {
  const [energy, setEnergy] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => {
        const fluctuation = Math.floor(Math.random() * 11) - 5;
        const nextEnergy = prev + fluctuation;
        return Math.min(Math.max(nextEnergy, 0), 100);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🎨 Color dinámico
  const getBarColor = () => {
    if (energy > 70) return "var(--system-green)";
    if (energy > 30) return "yellow";
    return "var(--emergency-red)";
  };

  // 🧠 Estado textual
  const getStatus = () => {
    if (energy > 70) return "Estable";
    if (energy > 30) return "Inestable";
    return "Crítico";
  };

  return (
    <div className="glass-card flex flex-col justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">
        Monitor de Escudos
      </h2>

      <div className="w-full bg-gray-800 rounded-full h-6 border border-gray-600 overflow-hidden">
        <div 
          className={`h-6 transition-all duration-500 ${energy < 30 ? "animate-pulse" : ""}`}
          style={{ 
            width: `${energy}%`,
            backgroundColor: getBarColor(),
            boxShadow: `0 0 10px ${getBarColor()}`
          }}
        ></div>
      </div>

      <p className="text-right mt-2 font-mono text-sm">
        {energy}% - {getStatus()}
      </p>
    </div>
  );
};

export default ShieldMonitor;