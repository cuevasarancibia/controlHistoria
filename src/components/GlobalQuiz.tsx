import React, { useState, useEffect } from 'react';
import { QUESTIONS } from '../data/questions';
import QuizEngine from './QuizEngine';

interface GlobalQuizProps {
  seen: number[];
  setSeen: (seen: number[]) => void;
  goBack: () => void;
}

export default function GlobalQuiz({ seen, setSeen, goBack }: GlobalQuizProps) {
  const [roundQs, setRoundQs] = useState<any[]>([]);
  
  useEffect(() => {
    let available = QUESTIONS.filter(q => !seen.includes(q.id));
    if (available.length < 20) {
      alert("¡Increíble! Has dado la vuelta a la base completa de 200 preguntas. Reiniciando ciclo de repaso...");
      setSeen([]);
      available = QUESTIONS;
    }
    const selection = [...available].sort(() => 0.5 - Math.random()).slice(0, 20);
    setRoundQs(selection);
  }, []);

  const handleFinishRound = (viewedIds: number[]) => {
    setSeen([...seen, ...viewedIds]);
    goBack();
  };

  if (roundQs.length === 0) return <div className="text-center p-10 font-bold text-slate-500">Cargando preguntas de geografía...</div>;

  return (
    <QuizEngine 
      title={`Prueba Global Geografía (Aleatoria - Quedan ${QUESTIONS.length - seen.length} nuevas)`} 
      questions={roundQs} 
      onFinish={() => handleFinishRound(roundQs.map(q => q.id))} 
    />
  );
}
