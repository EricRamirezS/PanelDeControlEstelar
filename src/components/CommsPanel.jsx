import { useEffect, useState } from 'react';

const INITIAL_MESSAGES = [
  {text: "Transmisión entrante de la Tierra...", type: "system"},
  {text: "Sistema en línea", type: "system"},
  {text: "Esperando instrucciones.", type: "system"}


];

const TYPE_STYLES = {
  system: "text-[var(--system-green)]",
  user: "text-[var(--retro-green)]",
  warn: "text-[var(--emergency-red)] drop-shadow-[0_0_6px_var(--emergency-red)]",
};

const CommsPanel = () => {
  const [messages, setMessages] = useState([INITIAL_MESSAGES]);
  const [input, setInput] = useState('');
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if(!text) return;
    setMessages(prev => [...prev, { text, type: 'user'}]);
    setInput('');
  };

  const handleClear = () => {
    setMessages(prev => prev.slice(0, -1));
  }

  //TODO: Implementar un input y un botón que limpie el estado del último mensaje enviado.
  // Es decir, poder enviar un mensaje nuevo a la lista, y también un botón para borrar.

  return (
    <div className="glass-card flex flex-col h-full gap-3">

      {/*aquí va el header*/}
      <div className="flex items-center justify-between">

        <h2 className="flex items-center gap-2 font-['Orbitron'] text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--retro-green)] drop-shadow-[0_0_8px_var(--retro-green)]">
          {/* Dot de estado */}
          <span className="w-2 h-2 rounded-full bg-[var(--system-green)] shadow-[0_0_8px_var(--system-green)] animate-pulse" />
          Panel de Comunicaciones
        </h2>
        <span className="text-[10px] tracking-widest text-[var(--retro-green)]/40 font-mono">
          {messages.length} MSG
        </span>
      </div>


           {/* Log */}
      <div className="flex-grow bg-black/50 border border-[var(--retro-green)]/20 rounded p-2.5 overflow-y-auto font-mono text-[12.5px] flex flex-col gap-1 min-h-0">
        {messages.length === 0 ? (
          <p className="text-[var(--retro-green)]/20 italic text-center m-auto text-xs">
            — Sin transmisiones —
          </p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-1.5 leading-relaxed ${TYPE_STYLES[msg.type]}`}>
              <span className="opacity-50 shrink-0">{'>'}</span>
              <span>{msg.text}</span>
            </div>
          ))
        )}
        <div ref={logEndRef} />
      </div>

      {/* Controles */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--retro-green)]/50 text-xs pointer-events-none">_</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Transmitir mensaje..."
            maxLength={120}
            className="w-full bg-black/60 border border-[var(--retro-green)]/20 rounded pl-6 pr-3 py-2 text-[var(--retro-green)] font-mono text-[12.5px] outline-none focus:border-[var(--retro-green)]/60 focus:shadow-[0_0_12px_rgba(57,255,20,0.12)] placeholder:text-[var(--retro-green)]/20 transition-all"
          />
        </div>

        <button
          onClick={handleSend}
          className="px-4 py-2 font-['Orbitron'] text-[9px] font-bold tracking-widest border border-[var(--retro-green)]/50 text-[var(--retro-green)] rounded bg-[var(--retro-green)]/5 hover:bg-[var(--retro-green)]/15 hover:shadow-[0_0_14px_rgba(57,255,20,0.25)] hover:border-[var(--retro-green)] active:scale-95 transition-all"
        >
          TX
        </button>

        <button
          onClick={handleClear}
          disabled={messages.length === 0}
          className="px-4 py-2 font-['Orbitron'] text-[9px] font-bold tracking-widest border border-[var(--emergency-red)]/35 text-[var(--emergency-red)] rounded bg-[var(--emergency-red)]/5 hover:bg-[var(--emergency-red)]/12 hover:shadow-[0_0_12px_rgba(255,51,51,0.2)] hover:border-[var(--emergency-red)] active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >
          DEL
        </button>
      </div>
 
      {/* Controles para añadir / limpiar mensajes van aquí */}
    </div>
  );
};

export default CommsPanel;
