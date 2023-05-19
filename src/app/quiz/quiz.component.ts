import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { QuizService } from '../services/quiz.service';
import { Topic } from '../helpers/topic.enum';
import { QuizNavigatorComponent } from '../quiz-navigator/quiz-navigator.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  private _selectedTopic!: Topic;
  private questions: Question[] = [];
  question!: Question;

  get selectedTopic(): Topic {
    return this._selectedTopic;
  }

  @Input()
  set selectedTopic(val: Topic) {
    this._selectedTopic = val;
    this.getQuestions(this._selectedTopic);
  }

  @ViewChild('quizNavComponent')
  quizNavigatorComponent!: QuizNavigatorComponent;

  @Output() submitPageEmitter = new EventEmitter<any>();

  @Output() submitAllEmitter = new EventEmitter<any>();

  constructor(private quizService: QuizService) {}

  getQuestions(selectedTopic: Topic) {
    this.quizService.getQuestions(selectedTopic).subscribe((data) => {
      this.questions = data;
      this.question = this.getQuestion(data[0].id);
    });
  }

  getQuestion(id: number): Question {
    return this.questions.find((question) => question.id === id) as Question;
  }

  onQuizButtonEmitted(id: number) {
    if (this.getQuestion(id)) {
      this.question = this.getQuestion(id);
      this.quizNavigatorComponent.selectedID = id;
    }
  }

  getQuestionsIDs(): number[] {
    return this.questions.map((question) => question.id);
  }

  submitPageClicked() {
    this.submitPageEmitter.emit();
  }

  submitAllClicked() {
    this.submitAllEmitter.emit();
  }
}
