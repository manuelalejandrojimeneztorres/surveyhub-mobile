import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSurveyPage } from './add-survey.page';

describe('AddSurveyPage', () => {
  let component: AddSurveyPage;
  let fixture: ComponentFixture<AddSurveyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
