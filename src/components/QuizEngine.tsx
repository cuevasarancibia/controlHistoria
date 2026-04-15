import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

interface QuizEngineProps {
  title: string;
  questions: any[];
  onFinish: () => void;
}

export default function QuizEngine({ title, questions, onFinish }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    if (idx === q.correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto text-center animate-in zoom-in">
        <h2 className="text-3xl font-black text-emerald-800 mb-2">¡Desafío Completado!</h2>
        <p className="text-slate-500 mb-8 font-medium">{title}</p>
        
        <div className="flex justify-center items-center mb-8">
          <div className={`w-36 h-36 rounded-full border-8 flex items-center justify-center text-5xl font-black shadow-inner
            ${percentage >= 60 ? 'border-emerald-400 text-emerald-600 bg-emerald-50' : 'border-amber-400 text-amber-600 bg-amber-50'}`}>
            {score}<span className="text-2xl text-slate-300 mx-1">/</span>{questions.length}
          </div>
        </div>
        
        <p className="font-bold text-xl mb-8">
          {percentage >= 80 ? '¡Excelente trabajo! Eres un geógrafo experto 🌟' : 
           percentage >= 60 ? '¡Buen trabajo! Vas por muy buen camino 👍' : 
           'No te preocupes, ¡un pequeño repaso y lo lograrás! 📚'}
        </p>

        <button onClick={onFinish} className="bg-emerald-600 text-white font-black py-4 px-8 rounded-xl shadow-md hover:bg-emerald-700 transition w-full uppercase tracking-wider">
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onFinish} className="text-primary font-black text-xs uppercase tracking-widest bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
          ✕ Salir
        </button>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Progreso del Test</span>
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="font-black text-primary text-sm">
              {currentIndex + 1}/{questions.length}
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl border-b-[12px] border-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/10"></div>
        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 opacity-70">{title}</h2>
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-10 leading-tight">{q.text}</h3>
        
        <div className="space-y-4">
          {q.options.map((opt: string, idx: number) => {
            let btnClass = "w-full text-left p-6 rounded-2xl border-2 font-bold transition-all duration-300 flex justify-between items-center group relative overflow-hidden ";
            
            if (!isAnswered) {
              btnClass += "bg-white border-slate-100 hover:border-primary hover:bg-emerald-50 text-slate-700 hover:shadow-md hover:-translate-y-0.5";
            } else {
              if (idx === q.correct) {
                btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-inner scale-[1.02] z-10"; // Correcta
              } else if (idx === selectedIdx) {
                btnClass += "bg-rose-50 border-rose-500 text-rose-800 shadow-inner opacity-90"; // Incorrecta seleccionada
              } else {
                btnClass += "bg-white border-slate-50 text-slate-300 opacity-40 scale-95"; // Otras
              }
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} className={btnClass} disabled={isAnswered}>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors ${
                    isAnswered && idx === q.correct ? 'bg-emerald-500 text-white' : 
                    isAnswered && idx === selectedIdx ? 'bg-rose-500 text-white' : 
                    'bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-base md:text-lg leading-snug pr-4">{opt}</span>
                </div>
                {isAnswered && idx === q.correct && <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 animate-in zoom-in" />}
                {isAnswered && idx === selectedIdx && idx !== q.correct && <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0 animate-in zoom-in" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-12 flex justify-end animate-in slide-in-from-right-4 duration-500">
            <button 
              onClick={nextQuestion}
              className="bg-primary text-white font-black py-4 px-10 rounded-2xl shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all flex items-center gap-3 transform hover:translate-x-2 uppercase tracking-widest text-xs"
            >
              {currentIndex + 1 === questions.length ? 'Ver Resultados Finales' : 'Siguiente Pregunta'}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
