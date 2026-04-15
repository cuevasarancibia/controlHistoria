import React from 'react';
import { BookOpen, PlayCircle, Mountain } from 'lucide-react';

interface MenuProps {
  setView: (view: string) => void;
}

export default function Menu({ setView }: MenuProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-in fade-in zoom-in duration-500">
      <div className="bg-white p-8 rounded-[24px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-b-[8px] border-study group">
        <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-study mb-6 group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 mb-3">Modo Estudio</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-8 flex-1">
          Explora el perfil topográfico interactivo y las 4 macroformas del relieve chileno.
        </p>
        <button 
          onClick={() => setView('study')}
          className="w-full py-3.5 bg-study text-white font-black rounded-xl shadow-md hover:bg-amber-600 transition-colors uppercase tracking-widest text-xs"
        >
          Comenzar
        </button>
      </div>

      <div className="bg-white p-8 rounded-[24px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-b-[8px] border-quiz group">
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-quiz mb-6 group-hover:scale-110 transition-transform duration-300">
          <PlayCircle className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 mb-3">Cuestionarios</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-8 flex-1">
          Ponte a prueba con 12 temas específicos, desde el Norte Grande hasta la Zona Austral.
        </p>
        <button 
          onClick={() => setView('topics')}
          className="w-full py-3.5 bg-quiz text-white font-black rounded-xl shadow-md hover:bg-blue-600 transition-colors uppercase tracking-widest text-xs"
        >
          Practicar
        </button>
      </div>

      <div className="bg-white p-8 rounded-[24px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-b-[8px] border-global group">
        <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center text-global mb-6 group-hover:scale-110 transition-transform duration-300">
          <Mountain className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800 mb-3">Prueba Global</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-8 flex-1">
          El gran desafío final. 80 preguntas aleatorias para demostrar que eres un experto.
        </p>
        <button 
          onClick={() => setView('global')}
          className="w-full py-3.5 bg-global text-white font-black rounded-xl shadow-md hover:bg-violet-600 transition-colors uppercase tracking-widest text-xs"
        >
          Iniciar Reto
        </button>
      </div>
    </div>
  );
}
