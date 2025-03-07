'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuizQuestion, getQuestionsFromRanges } from '@/data/questions';

export default function Quiz() {
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string[] }>({});
  // Add new state for shuffled options
  const [shuffledOptions, setShuffledOptions] = useState<{ [key: number]: string[] }>({});

  // Add helper function for shuffling options
  const shuffleOptions = (options: string[]): string[] => {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const rangesParam = searchParams.get('ranges');
    const countParam = searchParams.get('count');
    const questionsParam = searchParams.get('questions');
    
    if (questionsParam) {
      const questionIds = questionsParam.split(',').map(Number);
      const allQuestions = getQuestionsFromRanges([]);
      const filteredQuestions = questionIds
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is QuizQuestion => q !== undefined);
      
      if (filteredQuestions.length > 0) {
        setQuestions(filteredQuestions);
        // Shuffle options for all questions
        const shuffled = filteredQuestions.reduce((acc, question) => {
          acc[question.id] = shuffleOptions(question.options);
          return acc;
        }, {} as { [key: number]: string[] });
        setShuffledOptions(shuffled);
      } else {
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
      // Shuffle options for all questions
      const shuffled = filteredQuestions.reduce((acc, question) => {
        acc[question.id] = shuffleOptions(question.options);
        return acc;
      }, {} as { [key: number]: string[] });
      setShuffledOptions(shuffled);
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
    const currentQuestion = questions[currentQuestionIndex];
    const isMultipleChoice = Array.isArray(currentQuestion.correctAnswer);
    const currentAnswers = userAnswers[currentQuestion.id] || [];
    
    let newAnswers: string[];
    if (isMultipleChoice) {
      if (currentAnswers.includes(answer)) {
        newAnswers = currentAnswers.filter(a => a !== answer);
      } else {
        newAnswers = [...currentAnswers, answer];
      }
    } else {
      newAnswers = [answer]; // Always use array, even for single answers
    }

    const updatedAnswers = {
      ...userAnswers,
      [currentQuestion.id]: newAnswers // Remove the ternary operator and always use array
    };
    setUserAnswers(updatedAnswers);

    // Move to next question for single-choice answers or when all required answers are selected
    if (!isMultipleChoice || (isMultipleChoice && newAnswers.length === currentQuestion.correctAnswer.length)) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const params = new URLSearchParams();
        const encodedAnswers = encodeURIComponent(encodeURIComponent(JSON.stringify(updatedAnswers)));
        params.set('answers', encodedAnswers);
        
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
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  // Update the render part to use shuffled options
  return (
    <div className="w-full h-screen sm:h-auto sm:w-[672px] sm:min-w-[672px] card rounded-none sm:rounded-lg shadow-none sm:shadow-lg p-8 sm:p-8 sm:mx-auto">
      <div className="mb-8">
        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
        {Array.isArray(currentQuestion.correctAnswer) && (
          <div className="text-sm text-blue-600 mt-2">
            Select {currentQuestion.correctAnswer.length} answers
          </div>
        )}
      </div>

      <div className="space-y-6">
        <p className="text-gray-800 font-medium">
          {currentQuestion.question}
        </p>

        <div className="space-y-3">
          {shuffledOptions[currentQuestion.id]?.map((option, index) => {
            const currentAnswers = userAnswers[currentQuestion.id] || [];
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left flex items-center p-3 sm:p-4 rounded-lg border border-gray-200 
                  ${currentAnswers.includes(option) ? 'bg-blue-300' : 'bg-blue-50'} 
                  hover:bg-blue-100 cursor-pointer transition-colors`}
              >
                <span className="ml-3 text-gray-700">
                  {option}
                </span>
              </button>
            )
          })}
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