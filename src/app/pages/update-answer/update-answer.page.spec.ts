import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAnswerPage } from './update-answer.page';

describe('UpdateAnswerPage', () => {
  let component: UpdateAnswerPage;
  let fixture: ComponentFixture<UpdateAnswerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
