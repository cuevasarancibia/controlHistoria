import React, { useState } from 'react';

export default function InteractiveProfile() {
  const [info, setInfo] = useState({ 
    title: "El Relieve de Chile", 
    desc: "Pincha cada sección del perfil (montañas, valles o mar) para descubrir el nombre y las características de las 4 grandes Macroformas de nuestro país." 
  });

  const profileData = {
    ocean: { title: "Océano Pacífico", desc: "Baña todas las costas de Chile hacia el OESTE. Aporta la humedad que se convierte en camanchaca o lluvia dependiendo de la zona natural.", color: "#3b82f6" },
    planicies: { title: "Planicies Litorales", desc: "Es el terreno plano que está junto al mar. Es muy importante porque aquí se construyen grandes puertos y ciudades balneario (playas).", color: "#fde047" },
    costa: { title: "Cordillera de la Costa", desc: "Es una cordillera más baja y antigua que los Andes. Protege a los valles interiores. En el norte cae abruptamente al mar formando el 'Farellón Costero'.", color: "#b45309" },
    depresion: { title: "Depresión Intermedia", desc: "Es un terreno llano y bajo entre las dos cordilleras. ¡Es el relieve más poblado de Chile y el mejor para la agricultura!", color: "#84cc16" },
    andes: { title: "Cordillera de los Andes", desc: "Es la gran cadena montañosa al ESTE (limita con Argentina). Es muy alta, tiene volcanes y guarda nuestra mayor reserva de agua dulce (nieve y glaciares).", color: "#713f12" }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-2xl bg-sky-50 rounded-lg p-4 border relative">
        <h3 className="text-center font-bold text-slate-500 mb-2 uppercase text-sm tracking-widest">Perfil Topográfico (Oeste a Este)</h3>
        
        <svg viewBox="0 0 100 40" className="w-full h-auto drop-shadow-md cursor-pointer select-none">
          <path d="M0,25 Q10,24 20,25 L20,40 L0,40 Z" fill={profileData.ocean.color} onClick={() => setInfo(profileData.ocean)} className="hover:opacity-80 transition hover:scale-[1.01] transform-origin-bottom" />
          <path d="M20,25 L28,24 L28,40 L20,40 Z" fill={profileData.planicies.color} onClick={() => setInfo(profileData.planicies)} className="hover:opacity-80 transition hover:scale-[1.01] transform-origin-bottom" />
          <path d="M28,24 Q32,15 36,22 L36,40 L28,40 Z" fill={profileData.costa.color} onClick={() => setInfo(profileData.costa)} className="hover:opacity-80 transition hover:scale-[1.01] transform-origin-bottom" />
          <path d="M36,22 L65,22 L65,40 L36,40 Z" fill={profileData.depresion.color} onClick={() => setInfo(profileData.depresion)} className="hover:opacity-80 transition hover:scale-[1.01] transform-origin-bottom" />
          <path d="M65,22 Q80,-5 90,5 L100,10 L100,40 L65,40 Z" fill={profileData.andes.color} onClick={() => setInfo(profileData.andes)} className="hover:opacity-80 transition hover:scale-[1.01] transform-origin-bottom" />
          <path d="M73,11 Q80,-5 90,5 L92,6 Q85,15 73,11 Z" fill="#ffffff" pointerEvents="none" opacity="0.9" />
          
          <text x="10" y="35" fontSize="3" fill="#fff" fontWeight="bold" textAnchor="middle" pointerEvents="none">Mar</text>
          <text x="24" y="35" fontSize="2.5" fill="#b45309" fontWeight="bold" textAnchor="middle" pointerEvents="none">Planicies</text>
          <text x="32" y="35" fontSize="2.5" fill="#fff" fontWeight="bold" textAnchor="middle" pointerEvents="none">C. Costa</text>
          <text x="50" y="35" fontSize="3" fill="#166534" fontWeight="bold" textAnchor="middle" pointerEvents="none">Depresión Intermedia</text>
          <text x="82" y="35" fontSize="3" fill="#fff" fontWeight="bold" textAnchor="middle" pointerEvents="none">C. Andes</text>
        </svg>

        <div className="absolute top-2 right-2 flex items-center gap-1 text-xs font-bold text-slate-400 bg-white/80 p-1 rounded shadow-sm pointer-events-none">
          👆 Pincha las zonas
        </div>
      </div>

      <div className="w-full max-w-2xl bg-slate-50 p-6 rounded-lg border-2 border-dashed border-emerald-200 min-h-[140px] shadow-inner">
        <h3 className="font-black text-2xl mb-2 text-emerald-800">{info.title}</h3>
        <p className="text-slate-700 text-lg leading-relaxed">{info.desc}</p>
      </div>
    </div>
  );
}
