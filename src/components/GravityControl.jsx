import { useState } from 'react';

const GravityControl = () => {
  // eslint-disable-next-line no-unused-vars
  const [gravityStr, setGravityStr] = useState(1);

  //TODO: Crear un toggle que, al activarse, multiplique el valor mostrado por 9.8 (Gravedad Terrestre).
  const [isEarthGravity, setIsEarthGravity] = useState(false);

  const toggleGravity = () => {
    setIsEarthGravity(!isEarthGravity);
  };

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Control de Gravedad</h2>
      <div className="text-4xl font-mono text-purple-400">
        {isEarthGravity ? gravityStr * 9.8 : gravityStr} G
      </div>
      <div className="mt-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isEarthGravity}
            onChange={toggleGravity}
          />
          <div className="relative">
            <div className="bg-gray-300 border-2 border-gray-400 rounded-full w-12 h-6"></div>
            <div
              className={`absolute left-1 top-1 bg-white border-2 border-gray-400 rounded-full w-4 h-4 transition-all duration-200 ${
                isEarthGravity ? 'transform translate-x-full' : ''
              }`}
            ></div>
          </div>
          <span className="ml-2 text-gray-300">Gravedad Terrestre</span>
        </label>
      </div>
    </div>
  );
};

export default GravityControl;
