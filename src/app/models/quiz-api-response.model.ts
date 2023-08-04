import {Quiz} from "./quiz.model";

export interface QuizApiResponse {
  response_code: number;
  results: Quiz[];
}
