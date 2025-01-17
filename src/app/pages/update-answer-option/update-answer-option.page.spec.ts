import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAnswerOptionPage } from './update-answer-option.page';

describe('UpdateAnswerOptionPage', () => {
  let component: UpdateAnswerOptionPage;
  let fixture: ComponentFixture<UpdateAnswerOptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnswerOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
