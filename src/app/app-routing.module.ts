import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FourOhFourComponentComponent} from "./components/four-oh-four-component/four-oh-four-component.component";
import {QuizSelectorComponent} from "./components/quiz-selector/quiz-selector.component";
import {QuizResultsComponent} from "./components/quiz-results/quiz-results.component";
import {categoriesResolver} from "./resolvers/categories-resolver";

const routes: Routes = [
  {path: '', redirectTo : 'quiz-selector',pathMatch:'full'},
  {path: 'quiz-selector', component: QuizSelectorComponent, resolve:{categories : categoriesResolver}},
  {path: 'quiz-results', component: QuizResultsComponent},
  {path: 'not-found', component: FourOhFourComponentComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
