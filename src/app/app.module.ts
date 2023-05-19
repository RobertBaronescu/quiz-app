import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizQuestionsCardComponent } from './quiz-questions-card/quiz-questions-card.component';
import { QuizNavigatorComponent } from './quiz-navigator/quiz-navigator.component';
import { QuizResultsCardComponent } from './quiz-results-card/quiz-results-card.component';

@NgModule({
  declarations: [AppComponent, CoreComponent, QuizComponent, QuizQuestionsCardComponent, QuizNavigatorComponent, QuizResultsCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
