'use client';

import { Suspense } from 'react';
import Results from '../results/components/Results';

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    }>
      <Results />
    </Suspense>
  );
}