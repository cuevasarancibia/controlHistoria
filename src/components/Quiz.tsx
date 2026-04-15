import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import QuizEngine from './QuizEngine';

interface QuizProps {
  topic: any;
  goBack: () => void;
}

export default function Quiz({ topic, goBack }: QuizProps) {
  const topicQs = QUESTIONS.filter(q => q.topicId === topic.id);
  const [qs] = useState([...topicQs].sort(() => 0.5 - Math.random()));
  return <QuizEngine title={`Test: ${topic.title}`} questions={qs} onFinish={goBack} />;
}
