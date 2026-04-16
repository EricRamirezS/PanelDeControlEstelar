import { useState, useEffect } from 'react';

const CrewStatus = () => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const allNames = ['Cmdr. Shepard', 'Lt. Ripley', 'Dr. Bowman', 'Eng. Scott', 'Cpt. Picard', 'Spock', 'Han Solo', 'Chewbacca', 'Cpt. Monkey D. Luffy', 'Pirate Hunter Roronoa Zoro', 'Navigator Nami', 'Black Leg Sanji', 'Cpt. Trafalgar Law', 'Cpt. Eustass Kid', 'Red-Haired Shanks', 'Whitebeard Edward Newgate', 'Cpt. Harlock', 'Pilot Spike Spiegel', 'Jet Black', 'Faye Valentine', 'Cpt. Juzo Okita', 'Susumu Kodai', 'Cpt. James T. Kirk', 'Cmdr. William Riker', 'Lt. Uhura', 'Cpt. Kathryn Janeway', 'Capt. Malcolm Reynolds', 'Pilot Wash', 'Cpt. Kara Thrace', 'Admiral William Adama', 'Dr. Who', 'The Mandalorian Din Djarin', 'Moff Gideon', 'Cpt. Jonathan Archer', 'Navigator Hilda', 'Astrogator Orion', 'Helmsman Vega', 'Cpt. Nova Strider'];
    const randomCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 members
    const shuffledNames = [...allNames].sort(() => 0.5 - Math.random()).slice(0, randomCount);

    const initialCrew = shuffledNames.map(name => ({
      name,
      online: Math.random() > 0.3 // 70% chance of being online
    }));
    setCrew(initialCrew);
  }, []);

  //TODO: Implementar un botón de filtrado para mostrar solo los tripulantes con online: true.

  return (
    <div className="glass-card flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-300 mb-2">Estado de Tripulación</h2>
      <ul className="flex-grow space-y-2 overflow-y-auto pr-2">
        {crew.map((member, idx) => (
          <li key={idx} className="flex items-center justify-between bg-gray-800/50 p-2 rounded border border-gray-700">
            <span className="font-mono text-sm">{member.name}</span>
            <span className={`w-3 h-3 rounded-full ${member.online ? 'bg-[var(--system-green)] shadow-[0_0_5px_var(--system-green)]' : 'bg-red-500 shadow-[0_0_5px_var(--emergency-red)]'}`}></span>
          </li>
        ))}
      </ul>
      <div className="mt-2 text-center">
        {/* Aquí va el botón para filtrar online */}
      </div>
    </div>
  );
};

export default CrewStatus;
