'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questionRanges } from '@/data/questions';

export default function SliderContent() {
  const searchParams = useSearchParams();
  const selectedRangesParam = searchParams.get('ranges');
  const [maxQuestions, setMaxQuestions] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<number>(14);
  const router = useRouter();

  useEffect(() => {
    if (selectedRangesParam) {
      const selectedRangeIds = selectedRangesParam.split(',').map(Number);
      
      // Obliczamy dokładną liczbę pytań w wybranych zakresach
      const selectedRanges = questionRanges.filter(range => 
        selectedRangeIds.includes(range.id)
      );
      
      const totalQuestions = selectedRanges.reduce((sum, range) => 
        sum + (range.endId - range.startId + 1), 0
      );
      
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
      <main className="flex-1 flex flex-col items-center justify-center w-full p-0 sm:p-20">
        <div className="w-full sm:max-w-[672px] min-h-screen sm:min-h-0 bg-white rounded-none sm:rounded-lg shadow-lg p-8 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-center text-lg text-gray-700 mb-8">
              Wybrana liczba pytań: {selectedQuestions}
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
              Rozpocznij Quiz
            </button>
          </div>
        </div>
      </main>
      <div className="flex justify-center w-full">
      </div>
    </div>
  );
}