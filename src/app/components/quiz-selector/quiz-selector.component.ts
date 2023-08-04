import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PartialObserver, Subscription} from "rxjs";
import {Category} from "../../models/category.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.css']
})
export class QuizSelectorComponent implements OnInit,OnDestroy{
  subscription: Subscription[] = [];
  categories: Category[] = [] as Category[];
  difficulty: string[] = [];
  selectedCategory :string;
  quizCreated: Quiz[] = [];
  selectorForm: FormGroup = this.fb.group({
    category:['', [Validators.required]],
    difficulty:['',[Validators.required]]
  });
  private activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  private quizService = inject(QuizService);

  constructor(public fb: FormBuilder) {
    this.selectedCategory = '';
  }
  ngOnInit() {
    this.loadDdlCategories();
    this.loadDdlDifficulty();
  }
  loadDdlCategories(){
    this.subscription.push(this.activatedRoute.data.subscribe(data => this.categories = data['categories']));
  }
  loadDdlDifficulty(){
    this.difficulty=["Easy","Medium","Hard"];
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }
  createQuiz(){
    if(this.selectorForm.valid){
      console.log('category :'+ this.selectorForm.get('category')?.value);
      console.log('difficulty :'+ this.selectorForm.get('difficulty')?.value);

      const quizObserver: PartialObserver<Quiz[]> = {
        next: data => {
        this.quizCreated = data;
        console.log('this.quizCreated :');
        console.log(this.quizCreated);
        }
      };
      this.subscription.push(this.quizService.getQuiz(this.selectorForm.get('category')?.value,this.selectorForm.get('difficulty')?.value).subscribe(quizObserver));
    }

  }


}
