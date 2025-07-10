// questions-manager.ts

import { QuizQuestion, questionRanges as questionRanges1, getQuestionsFromRanges as getQuestionsFromRanges1 } from './questions';
import { questionRanges as questionRanges2, getQuestionsFromRanges as getQuestionsFromRanges2 } from './questions2';

export interface QuestionSet {
  id: string;
  name: string;
  getQuestions: (selectedRangeIds: number[]) => QuizQuestion[];
  getRanges: () => typeof questionRanges1;
}

export const questionSets: QuestionSet[] = [
  {
    id: 'CSR',
    name: 'CSR',
    getQuestions: getQuestionsFromRanges1,
    getRanges: () => questionRanges1
  },
  {
    id: 'prawo-ulicy',
    name: 'Prawo',
    getQuestions: getQuestionsFromRanges2,
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

export type { QuizQuestion };
