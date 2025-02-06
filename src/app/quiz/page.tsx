'use client';

import { Suspense } from 'react';
import Quiz from "../quiz/components/Quiz";

export default function QuizPage() {
  return (
    <div className="grid grid-rows-[1fr] sm:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-8 sm:pb-20 sm:gap-16 sm:p-20">
      <main className="w-full h-full sm:w-auto sm:h-auto flex flex-col gap-8 row-start-2 items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Quiz />
        </Suspense>
      </main>
    </div>
  );
}