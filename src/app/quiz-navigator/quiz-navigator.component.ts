import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-navigator',
  templateUrl: './quiz-navigator.component.html',
  styleUrls: ['./quiz-navigator.component.css'],
})
export class QuizNavigatorComponent implements OnInit {
  @Output() quizButtonEmitter = new EventEmitter<number>();

  selectedID!: number;

  private _questionIDs!: number[];

  get questionIDs(): number[] {
    return this._questionIDs;
  }

  @Input()
  set questionIDs(val: number[]) {
    this._questionIDs = val;
    this.selectedID = this.questionIDs[0];
  }

  constructor() {}

  ngOnInit(): void {}

  onQuizButtonClicked(id: number) {
    this.selectedID = id;
    this.quizButtonEmitter.emit(this.selectedID);
  }
}
