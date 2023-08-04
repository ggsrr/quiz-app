import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizSelectorComponent } from './components/quiz-selector/quiz-selector.component';
import { QuizDisplayerComponent } from './components/quiz-displayer/quiz-displayer.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import {DropdownModule} from "primeng/dropdown";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {SelectButtonModule} from "primeng/selectbutton";
import { MyColorizedButtonDirective } from './directives/my-colorized-button/my-colorized-button.directive';
import { MyColorizedScoreDirective } from './directives/my-colorized-score/my-colorized-score.directive';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    ButtonModule,
    PanelModule,
    SelectButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    QuizSelectorComponent,
    QuizDisplayerComponent,
    QuizResultsComponent,
    MyColorizedButtonDirective,
    MyColorizedScoreDirective
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
