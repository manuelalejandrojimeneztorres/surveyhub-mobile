import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateQuestionOptionPage } from './update-question-option.page';

describe('UpdateQuestionOptionPage', () => {
  let component: UpdateQuestionOptionPage;
  let fixture: ComponentFixture<UpdateQuestionOptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
