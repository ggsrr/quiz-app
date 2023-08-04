import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Quiz} from "../../models/quiz.model";
import {Subscription} from "rxjs";
import {ShareDataService} from "../../services/share-data.service";

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit, OnDestroy{
  quizSubmitted: Quiz[] = [] as Quiz[];
  subscription: Subscription[] = [];
  score: number;
  private shareDataService = inject(ShareDataService);
  private route = inject(Router);
  constructor(){
    this.score = 0;
  }
  ngOnInit(): void {
    this.subscription.push(this.shareDataService.lastQuizSubmitted.subscribe(data => this.quizSubmitted = data as Quiz[]));
    console.log(this.quizSubmitted);

    if(this.quizSubmitted.length<1){
      this.navigateToHome();
    }
    else{
      this.calculateScore();
    }
  }

  ngOnDestroy(): void {
    this.shareDataService.lastQuizSubmitted.next([] as Quiz[]);
    this.subscription.forEach(s => s.unsubscribe());
  }

  calculateScore(){
    this.score = this.quizSubmitted.filter(quiz => quiz.selectedAnswer === quiz.correct_answer).length;
  }
  navigateToHome(){
    this.route.navigate(['/']);
  }

}
