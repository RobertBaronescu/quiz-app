import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { QuizNavigatorComponent } from '../quiz-navigator/quiz-navigator.component';
import { QuizService } from '../services/quiz.service';
import { UserAnswer } from '../interfaces/user-answer.interface';

@Component({
  selector: 'app-quiz-questions-card',
  templateUrl: './quiz-questions-card.component.html',
  styleUrls: ['./quiz-questions-card.component.css'],
})
export class QuizQuestionsCardComponent implements OnInit {
  private _question!: Question;

  get question(): Question {
    return this._question;
  }

  @Input()
  set question(val: Question) {
    this._question = val;
    this.userAnswer = '';

    this.getUserAnswer();
  }

  userAnswer!: string;

  @Output() prevNextButtonEmitter = new EventEmitter<number>();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  getUserAnswer() {
    if (this.question?.question && this.question?.id) {
      this.quizService
        .getUserAnswer(this.question?.question, this.question?.id)
        .subscribe((response) => (this.userAnswer = response.user_answer));
    }
  }

  answerClicked(answer: string) {
    this.userAnswer = answer;

    const userAnswerBody: UserAnswer = {
      id: this.question.id,
      correct_answer: this.question.correct_answer,
      user_answer: this.userAnswer,
      question: this.question.question,
    };

    this.quizService.saveUserAnswer(userAnswerBody).subscribe({
      error: (err) => {
        if (err?.error?.includes('Insert failed, duplicate id')) {
          this.quizService.updateUserAnswer(userAnswerBody).subscribe();
        }
      },
    });
  }

  onPrevButtonClick() {
    this.prevNextButtonEmitter.emit(this.question.id - 1);
  }

  onNextButtonClick() {
    this.prevNextButtonEmitter.emit(this.question.id + 1);
  }
}
