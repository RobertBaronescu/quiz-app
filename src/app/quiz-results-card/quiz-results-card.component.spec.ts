import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultsCardComponent } from './quiz-results-card.component';

describe('QuizResultsCardComponent', () => {
  let component: QuizResultsCardComponent;
  let fixture: ComponentFixture<QuizResultsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizResultsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
