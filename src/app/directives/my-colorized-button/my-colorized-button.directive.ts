import {Directive,  HostBinding, Input, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz.model";

@Directive({
  selector: '[appMyColorizedButton]'
})
export class MyColorizedButtonDirective implements OnInit{

  @Input() answerElement: string = '';
  @Input() quizElement: Quiz = {} as Quiz;
  @HostBinding('style.background-color') backgroudColor:string = 'white';
  @HostBinding('style.color') color:string = 'black';

  manageButtonColor() {
    if(this.quizElement.correct_answer === this.answerElement){
      this.backgroudColor = 'green';
    }else if(this.quizElement.selectedAnswer === this.answerElement){
      this.backgroudColor = 'red';
    }
    if(this.backgroudColor !== 'white'){
      this.color='white'
    }
  }

  ngOnInit(): void {
    console.log(this.answerElement);
      this.manageButtonColor();
  }

}
