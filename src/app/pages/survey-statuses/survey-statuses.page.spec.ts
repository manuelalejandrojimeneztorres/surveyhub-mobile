import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyStatusesPage } from './survey-statuses.page';

describe('SurveyStatusesPage', () => {
  let component: SurveyStatusesPage;
  let fixture: ComponentFixture<SurveyStatusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyStatusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
