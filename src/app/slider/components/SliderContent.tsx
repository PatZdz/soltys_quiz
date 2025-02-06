'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SliderContent() {
  const searchParams = useSearchParams();
  const selectedRangesParam = searchParams.get('ranges');
  const [maxQuestions, setMaxQuestions] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<number>(14);
  const router = useRouter();

  useEffect(() => {
    if (selectedRangesParam) {
      const ranges = selectedRangesParam.split(',').map(Number);
      const totalQuestions = ranges.reduce((sum, rangeId) => {
        // Ostatnia paczka (id=9) ma 6 pytań, reszta po 10
        return sum + (rangeId === 9 ? 6 : 10);
      }, 0);
      
      setMaxQuestions(totalQuestions);
      setSelectedQuestions(Math.min(selectedQuestions, totalQuestions));
    } else {
      router.push('/range');
    }
  }, [selectedRangesParam, router, selectedQuestions]);

  const handleStartQuiz = () => {
    router.push(`/quiz?count=${selectedQuestions}&ranges=${selectedRangesParam}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center w-full p-8 sm:p-20">
        <div className="w-full max-w-[672px] bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-xl font-medium text-gray-700 mb-6">Select the number of questions</h1>
          
          <div className="mb-4">
            <p className="text-center text-lg text-gray-700 mb-8">
              Selected number of questions: {selectedQuestions}
            </p>
            
            <input
              type="range"
              min="1"
              max={maxQuestions}
              value={selectedQuestions}
              onChange={(e) => setSelectedQuestions(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleStartQuiz}
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </main>
      <div className="flex justify-center w-full">
      </div>
    </div>
  );
}