import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddQuestionTypePage } from './add-question-type.page';

describe('AddQuestionTypePage', () => {
  let component: AddQuestionTypePage;
  let fixture: ComponentFixture<AddQuestionTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
