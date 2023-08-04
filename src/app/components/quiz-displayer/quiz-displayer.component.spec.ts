import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDisplayerComponent } from './quiz-displayer.component';

describe('QuizDisplayerComponent', () => {
  let component: QuizDisplayerComponent;
  let fixture: ComponentFixture<QuizDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDisplayerComponent]
    });
    fixture = TestBed.createComponent(QuizDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
