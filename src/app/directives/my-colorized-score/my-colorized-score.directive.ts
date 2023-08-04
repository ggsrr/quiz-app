import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyColorizedScore]'
})
export class MyColorizedScoreDirective implements OnInit {

  @Input() score: number = 0;
  @HostBinding('style.background-color') backgroudColor:string = 'white';
  @HostBinding('style.color') color:string = 'black';

  manageScoreColor() {
  if(this.score<= 1){
  this.backgroudColor = 'red';
  }
  else if(this.score<=3){
  this.backgroudColor = 'yellow';
  }
  else{
    this.backgroudColor = 'green';
  }
  }

  ngOnInit(): void {
    this.manageScoreColor();
  }

}
