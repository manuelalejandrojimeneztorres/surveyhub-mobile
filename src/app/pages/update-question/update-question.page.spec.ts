import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateQuestionPage } from './update-question.page';

describe('UpdateQuestionPage', () => {
  let component: UpdateQuestionPage;
  let fixture: ComponentFixture<UpdateQuestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
