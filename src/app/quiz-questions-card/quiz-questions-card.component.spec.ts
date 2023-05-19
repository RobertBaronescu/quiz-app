import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionsCardComponent } from './quiz-questions-card.component';

describe('QuizQuestionsCardComponent', () => {
  let component: QuizQuestionsCardComponent;
  let fixture: ComponentFixture<QuizQuestionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
