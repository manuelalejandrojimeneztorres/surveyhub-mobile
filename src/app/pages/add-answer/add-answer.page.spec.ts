import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnswerPage } from './add-answer.page';

describe('AddAnswerPage', () => {
  let component: AddAnswerPage;
  let fixture: ComponentFixture<AddAnswerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
