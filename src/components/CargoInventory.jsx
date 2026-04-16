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

  //TODO: Implementar un botón que elimine el último elemento del inventario.

  return (
    <div className="glass-card flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-4">Inventario de Carga</h2>
      <ul className="list-disc list-inside flex-grow">
        {inventory.map((item, index) => (
          <li key={index} className="text-gray-400 font-mono text-lg">{item}</li>
        ))}
      </ul>
      <div className="mt-4 border-t border-gray-700 pt-2">
        {/* Tu botón para eliminar el último elemento de la lista va aquí */}
      </div>
    </div>
  );
};

export default CargoInventory;
