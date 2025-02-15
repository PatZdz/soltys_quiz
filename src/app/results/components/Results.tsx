'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuestionsFromRanges } from '@/data/questions';

interface AnswerResult {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export default function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const answersParam = searchParams.get('answers');
      const rangesParam = searchParams.get('ranges');
      
      if (!answersParam) {
        console.error('No answers parameter provided');
        router.push('/');
        return;
      }

      let userAnswers;
      try {
        // Podwójne dekodowanie dla bezpieczeństwa
        const decodedAnswers = decodeURIComponent(decodeURIComponent(answersParam));
        userAnswers = JSON.parse(decodedAnswers);
      } catch (error) {
        console.error('Error processing answers:', error);
        router.push('/');
        return;
      }

      const ranges = rangesParam ? rangesParam.split(',').map(Number) : [];
      let correct = 0;
      const answersResults: AnswerResult[] = [];
      const questionIds = Object.keys(userAnswers).map(id => parseInt(id));
      const quizQuestions = getQuestionsFromRanges(ranges).filter(q => questionIds.includes(q.id));
      
      if (quizQuestions.length === 0) {
        console.error('No questions found');
        router.push('/');
        return;
      }

      quizQuestions.forEach(question => {
        if (!question) return;
        
        const userAnswer = userAnswers[question.id];
        const isCorrect = Array.isArray(question.correctAnswer)
          ? Array.isArray(userAnswer) && 
            userAnswer.length === question.correctAnswer.length && 
            userAnswer.every(a => question.correctAnswer.includes(a))
          : question.correctAnswer === userAnswer;
      
        if (isCorrect) correct++;
      
        answersResults.push({
          question: question.question,
          userAnswer: Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer || 'No answer provided',
          correctAnswer: Array.isArray(question.correctAnswer) 
            ? question.correctAnswer.join(', ')
            : question.correctAnswer,
          isCorrect
        });
      });

      setScore(correct);
      setTotalQuestions(quizQuestions.length);
      setResults(answersResults);
      setIsLoading(false);
    } catch (error) {
      console.error('Error processing results:', error);
      router.push('/');
    }
  }, [searchParams, router]);

  const handleRestart = () => {
    try {
      setIsLoading(true);
      const answersParam = searchParams.get('answers');
      const rangesParam = searchParams.get('ranges');
      
      if (!answersParam || !rangesParam) {
        router.push('/');
        return;
      }

      let userAnswers;
      try {
        // Dodajemy podwójne dekodowanie, tak jak w useEffect
        const decodedAnswers = decodeURIComponent(decodeURIComponent(answersParam));
        userAnswers = JSON.parse(decodedAnswers);
      } catch (error) {
        console.error('Error processing answers for restart:', error);
        router.push('/');
        return;
      }

      const questionIds = Object.keys(userAnswers).map(id => parseInt(id));
      router.push(`/quiz?questions=${questionIds.join(',')}&ranges=${rangesParam}`);
    } catch (error) {
      console.error('Error restarting quiz:', error);
      router.push('/');
    }
  };

  const handleRepeatMistakes = () => {
    try {
      if (results.length === 0) {
        router.push('/');
        return;
      }

      const rangesParam = searchParams.get('ranges');
      if (!rangesParam) {
        router.push('/');
        return;
      }

      const ranges = rangesParam.split(',').map(Number);
      const wrongQuestions = results
        .filter(r => !r.isCorrect)
        .map(r => {
          const question = getQuestionsFromRanges(ranges).find(q => q.question === r.question);
          return question?.id;
        })
        .filter((id): id is number => id !== undefined);
      
      if (wrongQuestions.length > 0) {
        router.push(`/quiz?questions=${wrongQuestions.join(',')}&ranges=${rangesParam}`);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Error handling mistakes:', error);
      router.push('/');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 sm:p-4">
      <div className="h-full w-full sm:max-w-2xl sm:mx-auto">
        <div className="bg-white h-screen sm:h-full sm:rounded-lg sm:shadow p-0 sm:p-6">
          <div className="p-4 sm:p-0">
            <h1 className="text-xl font-semibold text-center mb-4">Wyniki Quizu</h1>
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg">
                  Wynik: {score} z {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
                </p>
                {score === 83 && totalQuestions === 83 && (
                  <img src="/easter.jpg" alt="" className="h-20 w-20 object-contain" />
                )}
              </div>
            </div>
            
            <div className="space-y-4 mb-48 sm:mb-0">
              {results.map((result, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${
                    result.isCorrect ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <p className="font-medium mb-2">{result.question}</p>
                      <p className={`text-sm ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        Twoja odpowiedź: {result.userAnswer}
                      </p>
                      {!result.isCorrect && (
                        <p className="text-sm text-green-700 mt-1">
                          Poprawna odpowiedź: {result.correctAnswer}
                        </p>
                      )}
                    </div>
                    <div className={`ml-4 ${
                      result.isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {result.isCorrect ? '✓' : '✗'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop buttons section */}
        <div className="hidden sm:flex sm:flex-col gap-2">
          <button
            onClick={handleRestart}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Spróbuj ponownie
          </button>
          <button
            onClick={handleRepeatMistakes}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Powtórz błędy
          </button>
          <Link
            href="/"
            className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-center"
          >
            Wróć do startu
          </Link>
        </div>

        {/* Mobile buttons - fixed to bottom */}
        <div className="fixed bottom-0 left-0 right-0 flex flex-col gap-2 p-4 bg-white border-t sm:hidden">
          <button
            onClick={handleRestart}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Spróbuj ponownie
          </button>
          <button
            onClick={handleRepeatMistakes}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Powtórz błędy
          </button>
          <Link
            href="/"
            className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-center"
          >
            Wróć do startu
          </Link>
        </div>
      </div>
    </div>
  );
}