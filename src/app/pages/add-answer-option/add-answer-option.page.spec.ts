import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnswerOptionPage } from './add-answer-option.page';

describe('AddAnswerOptionPage', () => {
  let component: AddAnswerOptionPage;
  let fixture: ComponentFixture<AddAnswerOptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
