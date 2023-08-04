import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {QuizApiResponse} from "../models/quiz-api-response.model";
import {map, Observable, tap} from "rxjs";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService{
  private quizUrl ="https://opentdb.com/api.php?";
    constructor(private http: HttpClient) {
}
    getQuiz(category: number, difficulty:string) : Observable<Quiz[]>{
      console.log(this.unescapeHtmlString("Which famous world leader is famed for &#039; the saying, &quot;Let them eat cake&quot;, yet is rumored that he/she never said it at all?"));


      let params = new HttpParams();
      params = params.append('amount',5);
      params = params.append('category',category);
      params = params.append('difficulty',difficulty.toLowerCase());
      params = params.append('type','multiple');
    return this.http.get<QuizApiResponse>(this.quizUrl,{params: params}).pipe(
      map(data => data.results as Quiz[]),
      tap(data => console.log('Quiz : ' + JSON.stringify(data)))
    );

    }

  enhanceQuizElement(quizElements : Quiz[]){
      if(quizElements && quizElements.length>0){
    quizElements.forEach(element => {
      //Unescape HTML
      element.question= this.unescapeHtmlString(element.question);
      element.correct_answer = this.unescapeHtmlString(element.correct_answer);
      element.incorrect_answers = element.incorrect_answers.map(data => this.unescapeHtmlString(data));

      //Fill listOfAnswer
      let list = [] as string[];
      list.push(element.correct_answer);
      element.listOfAnswers = list.concat(element.incorrect_answers);
      element.listOfAnswers.sort(() => Math.random() - 0.5);
    })
    console.log('this.quizElements Enhanced :')
    console.log(quizElements);
      }
  }
  unescapeHtmlString(element: string){
      return element.replace(/&quot;/g, '\"').replace(/&#039;/g,'\'');
  }

}
