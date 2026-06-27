'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { QuizQuestion, QuizOption } from '@/data/questions-manager';
import { getQuestionSet } from '@/data/questions-manager';

const getCorrectAnswers = (question: QuizQuestion): string[] =>
  Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

const shuffleOptions = (options: QuizOption[]): QuizOption[] => {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function Quiz() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string[] }>({});
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const rangesParam = searchParams.get('ranges');
  const countParam = searchParams.get('count');
  const questionsParam = searchParams.get('questions');
  const setId = searchParams.get('set') || 'azure-fundamentals';

  const questions = useMemo(() => {
    const questionSet = getQuestionSet(setId);
    const getQuestionsFromRanges = questionSet.getQuestions;

    if (questionsParam) {
      const questionIds = questionsParam.split(',').map(Number);
      const allQuestions = getQuestionsFromRanges([]);
      const filteredQuestions = questionIds
        .map(id => allQuestions.find(q => q.id === id))
        .filter((q): q is QuizQuestion => q !== undefined);

      return filteredQuestions;
    }

    if (rangesParam) {
      const selectedRanges = rangesParam.split(',').map(Number);
      const count = countParam ? parseInt(countParam, 10) : undefined;

      let filteredQuestions = getQuestionsFromRanges(selectedRanges);

      if (count && count < filteredQuestions.length) {
        filteredQuestions = shuffleArray(filteredQuestions).slice(0, count);
      }

      return filteredQuestions;
    }

    return [];
  }, [countParam, questionsParam, rangesParam, setId]);

  const shuffledOptions = useMemo(() => questions.reduce((acc, question) => {
    acc[question.id] = shuffleOptions(question.options);
    return acc;
  }, {} as { [key: number]: QuizOption[] }), [questions]);

  useEffect(() => {
    if ((questionsParam || rangesParam) && questions.length === 0) {
      router.push('/');
    }
  }, [questions.length, questionsParam, rangesParam, router]);

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
        setIsExplanationVisible(false);
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

        const setId = searchParams.get('set') || 'azure-fundamentals';
        params.set('set', setId);

        router.push(`/results?${params.toString()}`);
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentCorrectAnswers = currentQuestion ? getCorrectAnswers(currentQuestion) : [];

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  // Update the render part to use shuffled options
  return (
    <div className="w-full h-screen overflow-y-auto sm:h-auto sm:w-[672px] sm:min-w-[672px] card rounded-none sm:rounded-lg shadow-none sm:shadow-lg p-8 sm:p-8 sm:mx-auto">
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

        {currentQuestion.generalExplanation && (
          <div>
            <button
              type="button"
              onClick={() => setIsExplanationVisible(prev => !prev)}
              className="text-sm font-medium text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
            >
              {isExplanationVisible ? 'Ukryj wyjaśnienie' : 'Pokaż wyjaśnienie'}
            </button>
            {isExplanationVisible && (
              <div className="mt-3 space-y-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-gray-700">
                <div>
                  <div className="font-semibold text-gray-900">Wyjaśnienie ogólne</div>
                  <p className="mt-1">{currentQuestion.generalExplanation}</p>
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Wyjaśnienia odpowiedzi</div>
                  <div className="mt-2 space-y-2">
                    {currentQuestion.options.map(option => {
                      const isCorrect = currentCorrectAnswers.includes(option.text);

                      return (
                        <div
                          key={option.text}
                          className={`rounded-md border p-3 ${isCorrect
                            ? 'border-green-200 bg-green-50'
                            : 'border-gray-200 bg-white'
                            }`}
                        >
                          <div className={`font-medium ${isCorrect ? 'text-green-800' : 'text-gray-800'}`}>
                            {option.text}
                          </div>
                          <p className="mt-1 text-gray-700">{option.explanation}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-3">
          {shuffledOptions[currentQuestion.id]?.map((option, index) => {
            const currentAnswers = userAnswers[currentQuestion.id] || [];
            const isSelected = currentAnswers.some(answer => answer === option.text);

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.text)}
                className={`w-full text-left flex items-center p-3 sm:p-4 rounded-lg border 
                  ${isSelected ? 'bg-blue-300 border-blue-500' : 'bg-blue-50 border-gray-200'}`}
              >
                <span className="ml-3 text-gray-700">
                  {option.text}
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
              setIsExplanationVisible(false);
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
