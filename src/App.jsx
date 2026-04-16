import { useState, useEffect } from 'react';
import OxygenSensor from './components/OxygenSensor';
import EngineStatus from './components/EngineStatus';
import StarMap from './components/StarMap';
import ShieldMonitor from './components/ShieldMonitor';
import CommsPanel from './components/CommsPanel';
import GravityControl from './components/GravityControl';
import CargoInventory from './components/CargoInventory';
import ReactorTemp from './components/ReactorTemp';
import NavigationAI from './components/NavigationAI';
import CrewStatus from './components/CrewStatus';
import CorePowerGrid from './components/CorePowerGrid';

function App() {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const generateMap = () => {
      const planetNames = ['Kepler-186f', 'Gliese 581g', 'Proxima Centauri b', 'TRAPPIST-1e', 'HD 209458 b', 'LHS 1140 b'];
      const colors = ['red', 'cyan', 'green', 'yellow', 'purple', 'white'];
      const mapFeatures = Array.from({ length: Math.floor(Math.random() * 4) + 3 }).map((_, i) => ({
        id: i,
        name: planetNames[Math.floor(Math.random() * planetNames.length)],
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setMapData(mapFeatures);
    };

    generateMap();
    const mapInterval = setInterval(generateMap, 10000);
    return () => clearInterval(mapInterval);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col p-4 bg-transparent text-white overflow-hidden font-mono">
      {/* HEADER */}
      <header className="flex justify-between items-center pb-3 border-b border-[var(--retro-green)]/30 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-sm bg-[var(--retro-green)] animate-pulse flex items-center justify-center text-black font-black">
            UC
          </div>
          <h1 className="text-3xl font-black tracking-widest text-[var(--retro-green)] uppercase" style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.7)' }}>
            Nave Estelar Duoc UC
          </h1>
        </div>
        <div className="flex items-center gap-3 bg-[#051505] px-4 py-2 rounded-sm border border-[var(--system-green)]/30 shadow-[0_0_10px_rgba(0,255,102,0.1)]">
          <span className="text-[var(--system-green)] font-mono font-bold tracking-wider">ESTADO DEL SISTEMA: NOMINAL</span>
          <div className="w-3 h-3 rounded-full bg-[var(--system-green)] shadow-[0_0_8px_var(--system-green)] animate-pulse"></div>
        </div>
      </header>

      {/* DASHBOARD GRID */}
      {/* 5 columns x 3 rows grid: Total 15 cells */}
      <main className="flex-grow grid grid-cols-5 grid-rows-3 gap-4 pt-4 min-h-0">
        
        {/* ROW 1 */}
        <div className="col-span-1"><OxygenSensor /></div>
        <div className="col-span-1"><EngineStatus /></div>
        
        {/* ROW 1-2, COL 3-4 (4 cells) */}
        <div className="col-span-2 row-span-2"><CorePowerGrid /></div>
        
        <div className="col-span-1"><ShieldMonitor /></div>

        {/* ROW 2 */}
        <div className="col-span-1"><CommsPanel /></div>
        <div className="col-span-1"><GravityControl /></div>
        {/* Core is taking Col 3-4 */}
        <div className="col-span-1"><CargoInventory /></div>

        {/* ROW 3 */}
        {/* Col 1-2 */}
        <div className="col-span-2"><StarMap mapData={mapData} /></div>
        <div className="col-span-1"><ReactorTemp /></div>
        <div className="col-span-1"><NavigationAI /></div>
        <div className="col-span-1"><CrewStatus /></div>

      </main>
    </div>
  );
}

export default App;
