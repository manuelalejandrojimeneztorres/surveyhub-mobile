import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSurveyPage } from './update-survey.page';

describe('UpdateSurveyPage', () => {
  let component: UpdateSurveyPage;
  let fixture: ComponentFixture<UpdateSurveyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
