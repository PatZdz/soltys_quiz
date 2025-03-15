'use client';
import { useRouter } from 'next/navigation';
import { questionSets } from '@/data/questions-manager';

export default function Select() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[672px] space-y-4">
      {questionSets.map((set) => (
        <button
          key={set.id}
          onClick={() => router.push(`/range?set=${set.id}`)}
          className="w-full p-4 text-left text-gray-800 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <div className="font-medium">{set.name}</div>
          <p className="text-sm text-gray-600 mt-1">Wybierz ten egzamin, aby rozpocząć</p>
        </button>
      ))}
    </div>
  );
}