import { TestBed } from '@angular/core/testing';

import { SurveyStatusService } from './survey-status.service';

describe('SurveyStatusService', () => {
  let service: SurveyStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
