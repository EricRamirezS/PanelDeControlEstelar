import { useState } from 'react';

const GravityControl = () => {
  // eslint-disable-next-line no-unused-vars
  const [gravityStr, setGravityStr] = useState(1);

  //TODO: Crear un toggle que, al activarse, multiplique el valor mostrado por 9.8 (Gravedad Terrestre).

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Control de Gravedad</h2>
      <div className="text-4xl font-mono text-purple-400">
        {gravityStr} G
      </div>
      <div className="mt-4">
        {/* Añade el toggle (checkbox o botón) aquí */}
      </div>
    </div>
  );
};

export default GravityControl;
