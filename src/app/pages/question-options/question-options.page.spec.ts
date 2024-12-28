import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionOptionsPage } from './question-options.page';

describe('QuestionOptionsPage', () => {
  let component: QuestionOptionsPage;
  let fixture: ComponentFixture<QuestionOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
