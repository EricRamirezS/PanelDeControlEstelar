import { useState } from 'react';

const CommsPanel = () => {
  const [messages, setMessages] = useState([
    "Transmisión entrante de la Tierra...",
    "Sistemas en línea.",
    "Esperando instrucciones."
  ]);

  //TODO: Implementar un input y un botón que limpie el estado del último mensaje enviado.
  // Es decir, poder enviar un mensaje nuevo a la lista, y también un botón para borrar.

  return (
    <div className="glass-card flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-2">Panel de Comunicaciones</h2>
      <div className="flex-grow bg-black/40 p-2 rounded overflow-y-auto mb-2 font-mono text-sm border border-gray-800">
        {messages.map((msg, idx) => (
          <div key={idx} className="text-[var(--neon-blue)] mb-1">{'>'} {msg}</div>
        ))}
      </div>
      {/* Controles para añadir / limpiar mensajes van aquí */}
    </div>
  );
};

export default CommsPanel;
