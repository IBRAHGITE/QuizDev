export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string; // index of the correct option
  explanation?: string;
}
