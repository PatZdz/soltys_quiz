'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { QuestionRange } from '@/data/questions';

interface RangeOption {
  id: number;
  label: string;
}

export default function QuestionRangeSelector() {
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);
  const router = useRouter();

  const questionRanges: RangeOption[] = [
    { id: 1, label: 'Questions 1 - 10' },
    { id: 2, label: 'Questions 11 - 20' },
    { id: 3, label: 'Questions 21 - 30' },
    { id: 4, label: 'Questions 31 - 40' },
    { id: 5, label: 'Questions 41 - 50' },
    { id: 6, label: 'Questions 51 - 60' },
    { id: 7, label: 'Questions 61 - 70' },
    { id: 8, label: 'Questions 71 - 80' },
    { id: 9, label: 'Questions 81 - 86' },
  ];

  const handleRangeSelect = (rangeId: number) => {
    setSelectedRanges(prev =>
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-lg shadow-lg p-8">
      <h1 className="text-xl font-medium text-gray-700 mb-6">Select a range of questions</h1>
      <div className="space-y-3">
        {questionRanges.map((range) => (
          <label
            key={range.id}
            className={`flex items-center p-4 rounded-lg border ${selectedRanges.includes(range.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer transition-colors`}
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
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => router.push(`/slider?ranges=${selectedRanges.join(',')}`)}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedRanges.length > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
          disabled={selectedRanges.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}