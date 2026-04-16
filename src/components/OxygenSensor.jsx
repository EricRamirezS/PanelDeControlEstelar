import { useState, useEffect } from 'react';

const OxygenSensor = () => {
  const [oxygen, setOxygen] = useState(100);
  const [decreaseRate] = useState(Math.floor(Math.random() * 2000) + 500); // 500ms to 2500ms
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || oxygen <= 0) return;

    const interval = setInterval(() => {
      setOxygen((prev) => (prev > 0 ? prev - 1 : 0));
    }, decreaseRate);

    return () => clearInterval(interval);
  }, [decreaseRate, paused, oxygen]);

  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);
  const handleReset = () => {
    setOxygen(100);
    setPaused(false);
  };

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4" style={{ textShadow: '0 0 5px rgba(57, 255, 20, 0.4)' }}>Sensor de Oxígeno</h2>
      <div className="text-5xl font-mono text-[var(--retro-green)]" style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.8)' }}>
        {oxygen}%
      </div>

      <div className="mt-6 flex gap-3">
        {oxygen <= 80 ? (
          <>
            {oxygen > 0 ? (
              <>
              <button
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              onClick={paused ? handleResume : handlePause}
            >
              {paused ? 'Reanudar' : 'Detener'}
            </button>
            <button
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              onClick={handleReset}
            >
              Resetear
            </button>
              </>
            ):(
            <button
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                onClick={handleReset}
              >
                Resetear
              </button>
            )}
            
          </>
        ) : (
          <p className="text-sm text-gray-400">Esperando al 80% para habilitar controles</p>
        )}
      </div>
    </div>
  );
};

export default OxygenSensor;
