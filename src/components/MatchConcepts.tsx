import React, { useState, useEffect } from 'react';
import { CONCEPTS } from '../data/concepts';

export default function MatchConcepts() {
  const [selLeft, setSelLeft] = useState<any>(null);
  const [selRight, setSelRight] = useState<any>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [leftCol, setLeftCol] = useState<any[]>([]);
  const [rightCol, setRightCol] = useState<any[]>([]);

  const iniciarJuego = () => {
    const seleccionados = [...CONCEPTS].sort(() => 0.5 - Math.random()).slice(0, 6);
    setLeftCol(seleccionados.map(c => ({ id: c.id, text: c.term })).sort(() => 0.5 - Math.random()));
    setRightCol(seleccionados.map(c => ({ id: c.id, text: c.def })).sort(() => 0.5 - Math.random()));
    setMatched([]);
    setSelLeft(null);
    setSelRight(null);
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  const handleSelect = (side: 'left' | 'right', item: any) => {
    if (matched.includes(item.id)) return;
    if (side === 'left') {
      setSelLeft(item);
      if (selRight) checkMatch(item.id, selRight.id);
    } else {
      setSelRight(item);
      if (selLeft) checkMatch(selLeft.id, item.id);
    }
  };

  const checkMatch = (lId: number, rId: number) => {
    if (lId === rId) {
      setMatched([...matched, lId]);
      setSelLeft(null);
      setSelRight(null);
    } else {
      setTimeout(() => {
        setSelLeft(null);
        setSelRight(null);
      }, 600);
    }
  };

  const getBtnClass = (item: any, side: 'left' | 'right') => {
    let base = "p-4 rounded-lg border-2 text-sm font-bold transition text-left w-full shadow-sm ";
    if (matched.includes(item.id)) return base + "bg-emerald-100 border-emerald-500 text-emerald-800 opacity-50 cursor-not-allowed";
    if (selLeft?.id === item.id && side === 'left') return base + "bg-amber-100 border-amber-500 text-amber-800 shadow-md transform scale-105";
    if (selRight?.id === item.id && side === 'right') return base + "bg-blue-100 border-blue-500 text-blue-800 shadow-md transform scale-105";
    return base + "bg-white hover:bg-slate-50 hover:border-slate-300 border-slate-200 text-slate-600";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl text-emerald-800">Une el concepto con su definición correcta</h3>
        {matched.length === 6 && <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-black animate-bounce shadow">¡Todo Correcto! 🎉</span>}
      </div>
      <div className="grid grid-cols-2 gap-6 md:gap-12">
        <div className="space-y-4">
          <h4 className="font-black text-slate-400 text-center uppercase tracking-wider mb-2">Concepto</h4>
          {leftCol.map(c => (
            <button key={`l-${c.id}`} onClick={() => handleSelect('left', c)} className={getBtnClass(c, 'left')}>
              {c.text}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <h4 className="font-black text-slate-400 text-center uppercase tracking-wider mb-2">Definición</h4>
          {rightCol.map(c => (
            <button key={`r-${c.id}`} onClick={() => handleSelect('right', c)} className={getBtnClass(c, 'right')}>
              {c.text}
            </button>
          ))}
        </div>
      </div>
      <button onClick={iniciarJuego} className="mt-8 w-full md:w-auto px-6 py-3 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 font-bold text-sm transition">
        Reiniciar Juego
      </button>
    </div>
  );
}
