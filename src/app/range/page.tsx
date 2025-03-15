'use client';

import { Suspense } from 'react';
import QuestionRangeSelector from '../range/components/QuestionRangeSelector';

export default function RangePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center w-full p-0 sm:p-20">
        <div className="w-full sm:max-w-[672px]">
          <Suspense fallback={<div>Loading...</div>}>
            <QuestionRangeSelector />
          </Suspense>
        </div>
      </main>
    </div>
  );
}