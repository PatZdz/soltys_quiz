'use client';

import { Suspense } from 'react';
import SliderContent from './components/SliderContent';

export default function SliderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    }>
      <SliderContent />
    </Suspense>
  );
}