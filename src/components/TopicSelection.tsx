import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { TOPICS } from '../data/questions';

interface TopicSelectionProps {
  onSelect: (topic: any) => void;
  goBack: () => void;
}

export default function TopicSelection({ onSelect, goBack }: TopicSelectionProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={goBack} className="flex items-center gap-2 text-primary font-black mb-8 hover:opacity-80 transition-opacity uppercase tracking-widest text-xs bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
        <ArrowLeft className="w-4 h-4"/> Volver al Menú
      </button>
      
      <h2 className="text-2xl font-black text-primary-dark mb-8 flex items-center gap-3">
        <div className="w-2 h-8 bg-primary rounded-full"></div>
        Selecciona un tema para practicar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TOPICS.map(topic => (
          <button 
            key={topic.id} 
            onClick={() => onSelect(topic)}
            className="bg-white border border-slate-200 p-6 rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-center gap-4 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="bg-emerald-50 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
              {topic.icon}
            </div>
            <div className="font-extrabold text-slate-700 text-center">
              <span className="text-[10px] font-black text-slate-400 block mb-1 uppercase tracking-widest">Tema {topic.id}</span>
              <span className="text-sm md:text-base leading-tight">{topic.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
