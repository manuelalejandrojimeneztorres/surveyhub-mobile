import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddQuestionPage } from './add-question.page';

describe('AddQuestionPage', () => {
  let component: AddQuestionPage;
  let fixture: ComponentFixture<AddQuestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
