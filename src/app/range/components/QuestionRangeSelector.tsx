'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questionRanges } from '@/data/questions';

interface RangeOption {
  id: number;
  label: string;
}

export default function QuestionRangeSelector() {
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);
  const router = useRouter();

  // Używamy zakresów pytań bezpośrednio z pliku questions.ts
  const rangeOptions: RangeOption[] = questionRanges.map(range => ({
    id: range.id,
    label: `Pytania ${range.startId} - ${range.endId}`
  }));

  const handleRangeSelect = (rangeId: number) => {
    setSelectedRanges(prev =>
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-none sm:rounded-lg shadow-lg p-10 sm:p-8 min-h-screen sm:min-h-0">
      <h1 className="text-xl font-medium text-gray-700 mb-4">Wybierz zakres pytań</h1>
      <div className="space-y-2">
        {rangeOptions.map((range) => (
          <label
            key={range.id}
            className={`flex items-center p-2 sm:p-3 rounded-lg border ${
              selectedRanges.includes(range.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:bg-gray-50'
            } cursor-pointer transition-colors`}
          >
            <input
              type="checkbox"
              checked={selectedRanges.includes(range.id)}
              onChange={() => handleRangeSelect(range.id)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700">{range.label}</span>
          </label>
        ))}
      </div>
      <div className="mt-8 flex">
        <button
          onClick={() => router.push(`/slider?ranges=${selectedRanges.join(',')}`)}
          className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            selectedRanges.length > 0
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={selectedRanges.length === 0}
        >
          Dalej
        </button>
      </div>
    </div>
  );
}