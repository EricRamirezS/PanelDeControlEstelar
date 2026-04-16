import { useState } from 'react';

const EngineStatus = () => {
  const [isOn, setIsOn] = useState(false);

  //TODO: Crear el botón de "Ignición" y la lógica de cambio de estado.

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Estado del Motor</h2>
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-full ${isOn ? 'bg-[var(--system-green)] shadow-[0_0_10px_var(--system-green)]' : 'bg-gray-700'}`}></div>
        <span className="text-lg font-mono">{isOn ? 'ENCENDIDO' : 'APAGADO'}</span>
      </div>
      {/* Añade tu botón de ignición aquí */}
    </div>
  );
};

export default EngineStatus;
