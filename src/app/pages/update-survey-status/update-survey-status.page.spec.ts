import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSurveyStatusPage } from './update-survey-status.page';

describe('UpdateSurveyStatusPage', () => {
  let component: UpdateSurveyStatusPage;
  let fixture: ComponentFixture<UpdateSurveyStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSurveyStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
