import { useState, useEffect } from 'react';

const CorePowerGrid = () => {
  const [blips, setBlips] = useState([]);

  useEffect(() => {
    const generateBlip = () => {
      const numBlips = Math.floor(Math.random() * 3) + 1; // 1 to 3 blips
      const newBlips = Array.from({ length: numBlips }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 45; // 0 to 45% to keep inside the 50% radius
        return {
          id: Math.random().toString(36).substr(2, 9),
          left: `${50 + Math.cos(angle) * distance}%`,
          top: `${50 + Math.sin(angle) * distance}%`,
        };
      });
      setBlips(newBlips);
    };

    generateBlip(); // initial
    
    // pulse is ~2s, so we regenerate blips every 2s
    const blipInterval = setInterval(generateBlip, 2000);
    return () => clearInterval(blipInterval);
  }, []);

  return (
    <div className="glass-card flex flex-col items-center justify-center h-full relative overflow-hidden bg-gradient-to-br from-[#010a01] to-black border-[var(--retro-green)] border-2 shadow-[0_0_20px_var(--retro-green)]">
      <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 absolute top-4 z-20" style={{ textShadow: '0 0 5px rgba(57, 255, 20, 0.5)' }}>
        NÚCLEO DE ENERGÍA
      </h2>
      
      <div className="relative flex items-center justify-center w-64 h-64 mt-8">
        {/* Central Core */}
        <div className="absolute z-10 w-16 h-16 bg-[var(--retro-green)] rounded-sm shadow-[0_0_30px_var(--retro-green)] flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-sm opacity-50 blur-sm"></div>
        </div>
        
        {/* Radar/Sonar Rings */}
        <div className="absolute w-32 h-32 border-2 border-[var(--retro-green)] rounded-full sonar-pulse z-0" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-48 h-48 border-2 border-[var(--retro-green)] rounded-full sonar-pulse z-0" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute w-64 h-64 border-2 border-[var(--retro-green)] rounded-full sonar-pulse z-0" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Grid lines styling */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-green-900/50 shadow-[0_0_5px_var(--retro-green)]"></div>
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-green-900/50 shadow-[0_0_5px_var(--retro-green)]"></div>

        {/* Radar Blips */}
        {blips.map((blip) => (
          <div 
            key={blip.id}
            className="absolute w-3 h-3 bg-[var(--retro-green)] rounded-full shadow-[0_0_10px_var(--retro-green)] animate-pulse z-10"
            style={{ left: blip.left, top: blip.top, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 flex justify-between w-full px-6 font-mono text-sm text-[var(--retro-green)]">
        <span>PWR: 100%</span>
        <span>STB: OPTIMAL</span>
      </div>
    </div>
  );
};

export default CorePowerGrid;
