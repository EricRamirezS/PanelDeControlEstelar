import { useState, useEffect } from 'react';

const ShieldMonitor = () => {
  const [energy, setEnergy] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => {
        const fluctuation = Math.floor(Math.random() * 11) - 5; // -5 to +5
        const nextEnergy = prev + fluctuation;
        return Math.min(Math.max(nextEnergy, 0), 100);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //TODO: Hacer que el color de la barra cambie (verde -> amarillo -> rojo) según un valor numérico de energía.

  return (
    <div className="glass-card flex flex-col justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Monitor de Escudos</h2>
      <div className="w-full bg-gray-800 rounded-full h-6 border border-gray-600 overflow-hidden">
        <div 
          className="bg-gray-500 h-6 transition-all duration-500" 
          style={{ width: `${energy}%` }}
        ></div>
      </div>
      <p className="text-right mt-2 font-mono text-sm">{energy}% Integridad</p>
    </div>
  );
};

export default ShieldMonitor;
