'use client';

import QuestionRangeSelector from '../range/components/QuestionRangeSelector';

export default function RangePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center w-full p-0 sm:p-20">
        <div className="w-full sm:max-w-[672px]">
          <QuestionRangeSelector />
        </div>
      </main>
    </div>
  );
}