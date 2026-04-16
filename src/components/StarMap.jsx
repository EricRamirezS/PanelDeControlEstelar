const StarMap = ({ mapData }) => {
  //TODO: Recibir el prop mapData (un array de planetas que se actualiza cada 10s) y mapearlos en la interfaz.
  // Ejemplo de objeto en mapData: { id: 1, name: 'Marte', x: 20, y: 50, color: 'red' }
  // Usa las coordenadas x e y para posicionarlos usando estilos absolutos.
  
  return (
    <div className="glass-card flex flex-col h-full relative overflow-hidden">
      <h2 className="text-xl font-bold text-gray-300 mb-2 z-10">Mapa Estelar</h2>
      <div className="flex-grow bg-black/50 border border-gray-800 rounded relative">
        {/* Aquí debes mapear el array mapData y renderizarlos como puntos o planetas */}
      </div>
    </div>
  );
};

export default StarMap;
