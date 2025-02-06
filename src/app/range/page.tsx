'use client';

import QuestionRangeSelector from '../range/components/QuestionRangeSelector';

export default function RangePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center w-full p-8 sm:p-20">
        <div className="w-full max-w-[672px]">
          <QuestionRangeSelector />
        </div>
      </main>
      <div className="flex justify-center w-full">
      </div>
    </div>
  );
}