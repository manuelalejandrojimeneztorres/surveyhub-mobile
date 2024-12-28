import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddQuestionOptionPage } from './add-question-option.page';

describe('AddQuestionOptionPage', () => {
  let component: AddQuestionOptionPage;
  let fixture: ComponentFixture<AddQuestionOptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
