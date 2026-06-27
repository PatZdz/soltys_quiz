// questions-manager.ts

import {
  QuizQuestion,
  QuizOption,
  questionRanges as questionRanges1,
  getQuestionsFromRanges as getQuestionsFromRanges1
} from './questions';
import {
  QuizQuestion as LegacyQuizQuestion,
  questionRanges as questionRanges2,
  getQuestionsFromRanges as getQuestionsFromRanges2
} from './questions2';

export interface QuestionSet {
  id: string;
  name: string;
  getQuestions: (selectedRangeIds: number[]) => QuizQuestion[];
  getRanges: () => typeof questionRanges1;
}

const normalizeLegacyQuestions = (questions: LegacyQuizQuestion[]): QuizQuestion[] =>
  questions.map(question => ({
    id: question.id,
    question: question.question,
    options: question.options.map(option => ({
      text: option,
      explanation: Array.isArray(question.correctAnswer)
        ? question.correctAnswer.includes(option)
          ? 'To jedna z poprawnych odpowiedzi w tym pytaniu.'
          : `Ta odpowiedź nie należy do poprawnego zestawu. Poprawne odpowiedzi to: ${question.correctAnswer.join(', ')}.`
        : option === question.correctAnswer
          ? 'To poprawna odpowiedź.'
          : `To nie jest poprawna odpowiedź. Poprawna odpowiedź to: ${question.correctAnswer}.`
    })),
    correctAnswer: question.correctAnswer,
    generalExplanation: Array.isArray(question.correctAnswer)
      ? `Poprawne odpowiedzi to: ${question.correctAnswer.join(', ')}.`
      : `Poprawna odpowiedź to: ${question.correctAnswer}.`
  }));

export const questionSets: QuestionSet[] = [
  {
    id: 'azure-fundamentals',
    name: 'Azure Fundamentals',
    getQuestions: getQuestionsFromRanges1,
    getRanges: () => questionRanges1
  },
  {
    id: 'prawo-ulicy',
    name: 'Prawo',
    getQuestions: (selectedRangeIds) => normalizeLegacyQuestions(getQuestionsFromRanges2(selectedRangeIds)),
    getRanges: () => questionRanges2
  }
];

export const getQuestionSet = (id: string): QuestionSet => {
  const set = questionSets.find(set => set.id === id);
  if (!set) {
    return questionSets[0]; // Default to first set if not found
  }
  return set;
};

export type { QuizQuestion, QuizOption };
