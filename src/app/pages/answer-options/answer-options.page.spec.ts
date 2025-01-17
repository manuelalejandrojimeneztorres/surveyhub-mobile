import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerOptionsPage } from './answer-options.page';

describe('AnswerOptionsPage', () => {
  let component: AnswerOptionsPage;
  let fixture: ComponentFixture<AnswerOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
