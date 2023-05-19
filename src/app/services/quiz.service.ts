import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../helpers/topic.enum';
import { UserAnswer } from '../interfaces/user-answer.interface';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuestions(topic: Topic): Observable<Question[]> {
    return this.http.get<Question[]>(`http://localhost:3000/${topic}`);
  }

  getUserAnswer(question: string, id: number): Observable<UserAnswer> {
    return this.http.get<UserAnswer>(
      `http://localhost:3000/user_answers/${id}?question=${question}`
    );
  }

  saveUserAnswer(body: UserAnswer) {
    return this.http.post('http://localhost:3000/user_answers', body);
  }

  updateUserAnswer(body: UserAnswer) {
    return this.http.put(
      `http://localhost:3000/user_answers/${body.id}/?question=${body.question}`,
      body
    );
  }
}
