import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Topic } from '../helpers/topic.enum';
import { Question } from '../interfaces/question.interface';
import { Scores } from '../interfaces/score.inteface';

@Component({
  selector: 'app-quiz-results-card',
  templateUrl: './quiz-results-card.component.html',
  styleUrls: ['./quiz-results-card.component.css'],
})
export class QuizResultsCardComponent implements OnInit {

  scores: Scores = {
    finalScore: 0,
    designPatternScore: 0,
    angularScore: 0,
    javaScore: 0,
  };
  constructor(private quizService: QuizService) {
    this.calculateScores();
  }

  ngOnInit(): void {}

  calculateScores() {
    this.calculateScore('designPatternScore', Topic.DesignPatterns);
    this.calculateScore('angularScore', Topic.Angular);
    this.calculateScore('javaScore', Topic.Java);
  }

  calculateScore(score: keyof Scores, topic: Topic) {
    this.quizService.getQuestions(topic).subscribe((questions) => {
      questions.forEach((question) => {
        this.quizService
          .getUserAnswer(question.question, question.id)
          .subscribe((userAnswer) => {
            if (question.correct_answer === userAnswer.user_answer) {
              this.scores[score]++;
            }
          });
      });
    });
  }
}
