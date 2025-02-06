import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-[672px] text-center">
      <div className="flex justify-center mb-4">
        <Image src="/test.png" alt="Quiz header image" width={150} height={150} priority />
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Sołtys Quiz</h1>
      <p className="mt-2 text-gray-600">Sprawdź swoją wiedzę z zakresu ekonomii</p>
    </header>
  );
}