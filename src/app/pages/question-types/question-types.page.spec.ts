import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionTypesPage } from './question-types.page';

describe('QuestionTypesPage', () => {
  let component: QuestionTypesPage;
  let fixture: ComponentFixture<QuestionTypesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
