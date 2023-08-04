import {Component, inject, Input, OnChanges, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/quiz.service";
import {SelectButtonChangeEvent} from "primeng/selectbutton";
import {Router} from "@angular/router";
import {ShareDataService} from "../../services/share-data.service";

@Component({
  selector: 'app-quiz-displayer',
  templateUrl: './quiz-displayer.component.html',
  styleUrls: ['./quiz-displayer.component.css']
})
export class QuizDisplayerComponent implements OnInit,OnChanges{

  @Input()
  quizElements : Quiz[] = [] as Quiz[];
  showSubmitButton :boolean;
  private quizService = inject(QuizService);
  private router : Router = inject(Router);
  private shareDataService = inject(ShareDataService);

  constructor(){
    this.showSubmitButton = false;
  }
  ngOnInit(): void {
    this.reloadElements();
  }

  ngOnChanges(): void {
    this.reloadElements();
  }
  reloadElements(){
    this.quizService.enhanceQuizElement(this.quizElements);
  }
  handleSelectChange(element: Quiz,event :  SelectButtonChangeEvent){
    this.quizElements.map(data => {
      if(data.question === element.question){
        data.selectedAnswer= event.value as string;
      }
    });
    this.checkForSubmission();
  };
  checkForSubmission(){
    let answersCounter: number =0;
    this.quizElements.forEach(element => {
      if(element.selectedAnswer){
        answersCounter++;
      }
    });
    if(answersCounter === 5){
      this.showSubmitButton =true;
    }
  }

    submit(){
    this.shareDataService.lastQuizSubmitted.next(this.quizElements);
    this.router.navigate(['/quiz-results']);
    }

}
