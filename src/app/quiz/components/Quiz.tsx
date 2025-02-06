'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuizQuestion, getQuestionsFromRanges } from '@/data/questions';

export default function Quiz() {
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const rangesParam = searchParams.get('ranges');
    const countParam = searchParams.get('count');
    const questionsParam = searchParams.get('questions');
    
    if (questionsParam) {
      const questionIds = questionsParam.split(',').map(Number);
      const allQuestions = getQuestionsFromRanges([]); // Teraz zwróci wszystkie pytania
      const filteredQuestions = questionIds
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is QuizQuestion => q !== undefined);
      
      if (filteredQuestions.length > 0) {
        setQuestions(filteredQuestions);
      } else {
        // Jeśli nie znaleziono pytań, przekieruj do strony głównej
        window.location.href = '/';
      }
    }
    else if (rangesParam) {
      const selectedRanges = rangesParam.split(',').map(Number);
      const count = countParam ? parseInt(countParam, 10) : undefined;
      
      let filteredQuestions = getQuestionsFromRanges(selectedRanges);
      
      if (count && count < filteredQuestions.length) {
        filteredQuestions = shuffleArray(filteredQuestions).slice(0, count);
      }
      
      setQuestions(filteredQuestions);
    }
  }, [searchParams]);

  const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = {
      ...userAnswers,
      [questions[currentQuestionIndex].id]: answer
    };
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const params = new URLSearchParams();
      // Encode the answers properly before adding to URL
      params.set('answers', encodeURIComponent(JSON.stringify(newAnswers)));
      
      const rangesParam = searchParams.get('ranges');
      if (rangesParam) {
        params.set('ranges', rangesParam);
      }
      
      const questionsParam = searchParams.get('questions');
      if (questionsParam) {
        params.set('questions', questionsParam);
      }

      window.location.href = `/results?${params.toString()}`;
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen sm:h-auto sm:w-[672px] sm:min-w-[672px] card rounded-none sm:rounded-lg shadow-none sm:shadow-lg p-8 sm:p-8 sm:mx-auto">
      <div className="mb-8">
        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-gray-800 font-medium">
          {currentQuestion.question}
        </p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className="w-full text-left flex items-center p-3 sm:p-4 rounded-lg border border-gray-200 bg-blue-50 hover:bg-blue-100 cursor-pointer transition-colors"
            >
              <span className="ml-3 text-gray-700">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center items-center">
        <button
          onClick={() => {
            if (currentQuestionIndex > 0) {
              setCurrentQuestionIndex(prev => prev - 1);
            }
          }}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:opacity-50"
          disabled={currentQuestionIndex === 0}
        >
          Poprzednie pytanie
        </button>
      </div>
    </div>
  );
}