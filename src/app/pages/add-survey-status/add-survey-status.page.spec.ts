import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSurveyStatusPage } from './add-survey-status.page';

describe('AddSurveyStatusPage', () => {
  let component: AddSurveyStatusPage;
  let fixture: ComponentFixture<AddSurveyStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
