import { useState } from 'react';

const NavigationAI = () => {
  const [inputVal, setInputVal] = useState('');
  const [response, setResponse] = useState('');
  const handleSend = (e) => {
  e?.preventDefault?.();
  setResponse('Hola Capitán');
  setInputVal('');
};

  return (
    <div className="glass-card flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-2">IA de Navegación</h2>
      <div className="flex-grow bg-black/40 p-2 rounded flex items-center justify-center border border-gray-800">
        <span className="font-mono text-[var(--neon-blue)] text-center text-sm">
          {response || "Esperando comando..."}
        </span>
      </div>
      <div className="mt-2 flex gap-2">
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend(e);
          }}
          placeholder="Comando..."
          className="flex-grow bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm font-mono text-white outline-none focus:border-[var(--neon-blue)]"
        />
        {/* Agrega tu botónsdsdsd de enviar aquí para disparar la respuesta .*/}
      </div>
    </div>
  );
};

export default NavigationAI;
