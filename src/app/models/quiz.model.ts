export interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question : string;
  correct_answer: string;
  incorrect_answers : string[];
  listOfAnswers: string[];
  selectedAnswer: string;
}
