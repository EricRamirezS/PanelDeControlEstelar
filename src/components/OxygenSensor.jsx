import { useState, useEffect } from 'react';

const OxygenSensor = () => {
  const [oxygen, setOxygen] = useState(100);
  const [decreaseRate] = useState(Math.floor(Math.random() * 2000) + 500); // 500ms to 2500ms

  useEffect(() => {
    // El contador de oxígeno decrece con el tiempo
    const interval = setInterval(() => {
      setOxygen((prev) => (prev > 0 ? prev - 1 : 0));
    }, decreaseRate);

    return () => clearInterval(interval);
  }, [decreaseRate]);

  //TODO: Implementar la lógica para que el usuario pueda detenerlo o resetearlo en 80%.

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4" style={{ textShadow: '0 0 5px rgba(57, 255, 20, 0.4)' }}>Sensor de Oxígeno</h2>
      <div className="text-5xl font-mono text-[var(--retro-green)]" style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.8)' }}>
        {oxygen}%
      </div>
      {/* Añade tus botones de control aquí */}
    </div>
  );
};

export default OxygenSensor;
