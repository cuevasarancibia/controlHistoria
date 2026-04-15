import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import InteractiveProfile from './InteractiveProfile';
import MatchConcepts from './MatchConcepts';

interface StudyMaterialProps {
  goBack: () => void;
}

export default function StudyMaterial({ goBack }: StudyMaterialProps) {
  const [tab, setTab] = useState('chart');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={goBack} className="flex items-center gap-2 text-primary font-black mb-6 hover:opacity-80 transition-opacity uppercase tracking-widest text-xs bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
        <ArrowLeft className="w-4 h-4"/> Volver al Menú
      </button>

      <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 w-fit">
        <button 
          onClick={() => setTab('chart')} 
          className={`px-6 py-2.5 font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 ${
            tab === 'chart' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-slate-50'
          }`}
        >
          Perfil Topográfico
        </button>
        <button 
          onClick={() => setTab('match')} 
          className={`px-6 py-2.5 font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 ${
            tab === 'match' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-slate-50'
          }`}
        >
          Unir Conceptos
        </button>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-slate-100">
        {tab === 'chart' ? <InteractiveProfile /> : <MatchConcepts />}
      </div>
    </div>
  );
}
