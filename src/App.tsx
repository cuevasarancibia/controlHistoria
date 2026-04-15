/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Map } from 'lucide-react';
import Menu from './components/Menu';
import StudyMaterial from './components/StudyMaterial';
import TopicSelection from './components/TopicSelection';
import Quiz from './components/Quiz';
import GlobalQuiz from './components/GlobalQuiz';

export default function App() {
  const [view, setView] = useState('menu');
  const [currentTopic, setCurrentTopic] = useState(null);
  const [globalSeen, setGlobalSeen] = useState<number[]>([]);

  const renderView = () => {
    switch (view) {
      case 'menu': return <Menu setView={setView} />;
      case 'study': return <StudyMaterial goBack={() => setView('menu')} />;
      case 'topics': return <TopicSelection onSelect={(t) => { setCurrentTopic(t); setView('quiz'); }} goBack={() => setView('menu')} />;
      case 'quiz': return <Quiz topic={currentTopic} goBack={() => setView('topics')} />;
      case 'global': return <GlobalQuiz seen={globalSeen} setSeen={setGlobalSeen} goBack={() => setView('menu')} />;
      default: return <Menu setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-app-bg text-text-main font-sans flex flex-col">
      <header className="bg-primary text-white px-6 md:px-10 h-20 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-primary font-black text-xl">
            CH
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight leading-none uppercase">GeoChile</div>
            <div className="text-[11px] opacity-80 font-semibold uppercase tracking-wider">Educación 5º Básico</div>
          </div>
        </div>
        <div className="bg-primary-dark px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2.5 shadow-inner">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
          Estudiante
        </div>
      </header>

      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full flex flex-col gap-8">
        {view === 'menu' && (
          <div className="flex justify-between items-end animate-in fade-in slide-in-from-top-4 duration-500">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark">¡Hola, Explorador!</h1>
              <p className="text-text-muted font-medium mt-1">¿Qué zona de Chile exploraremos hoy?</p>
            </div>
            <div className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
              Tu Progreso: 75% Completado
            </div>
          </div>
        )}

        <div className="flex-1">
          {renderView()}
        </div>

        {view === 'menu' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <div className="bg-white rounded-2xl p-5 flex flex-wrap items-center gap-4 border border-slate-200 shadow-sm">
              <div className="text-xs font-black text-text-muted w-full md:w-auto uppercase tracking-widest border-b md:border-b-0 md:border-r border-slate-200 pb-2 md:pb-0 md:pr-4">
                Zonas Naturales:
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-[#EA580C] shadow-sm">Norte Grande</div>
                <div className="px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-[#F97316] shadow-sm">Norte Chico</div>
                <div className="px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-[#16A34A] shadow-sm">Z. Central</div>
                <div className="px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-[#15803D] shadow-sm">Zona Sur</div>
                <div className="px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest bg-[#0369A1] shadow-sm">Z. Austral</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
