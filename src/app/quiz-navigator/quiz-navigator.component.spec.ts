import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNavigatorComponent } from './quiz-navigator.component';

describe('QuizNavigatorComponent', () => {
  let component: QuizNavigatorComponent;
  let fixture: ComponentFixture<QuizNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
