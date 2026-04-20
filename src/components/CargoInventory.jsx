import { useState, useEffect } from 'react';

const CargoInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const allItems = ['Agua', 'Comida', 'Oxígeno', 'Repuestos', 'Baterías', 'Plasma', 'Medkits', 'Cristales Khyber', 'Semillas'];
    const randomCount = Math.floor(Math.random() * 4) + 3; // 3 to 6 items
    const initialInventory = [];
    for (let i = 0; i < randomCount; i++) {
        initialInventory.push(allItems[Math.floor(Math.random() * allItems.length)]);
    }
    setInventory(initialInventory);
  }, []);

  const removeLastItem = () => {
    setInventory(prev => prev.slice(0, -1));
  };

  return (
    <div className="glass-card flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Inventario de Carga</h2>
      <ul className="list-disc list-inside flex-grow">
        {inventory.map((item, index) => (
          <li key={index} className="text-gray-400 font-mono text-lg">{item}</li>
        ))}
      </ul>
      <div className="mt-4 border-t border-gray-700 pt-2">
        <button
          onClick={removeLastItem}
          disabled={inventory.length === 0}
          className="w-full px-4 py-2 bg-red-900 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-gray-200 font-mono rounded transition-colors"
        >
          Eliminar último elemento
        </button>
      </div>
    </div>
  );
};

export default CargoInventory;
