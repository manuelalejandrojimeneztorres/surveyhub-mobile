import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateQuestionTypePage } from './update-question-type.page';

describe('UpdateQuestionTypePage', () => {
  let component: UpdateQuestionTypePage;
  let fixture: ComponentFixture<UpdateQuestionTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
