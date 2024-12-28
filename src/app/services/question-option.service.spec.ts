import { TestBed } from '@angular/core/testing';

import { QuestionOptionService } from './question-option.service';

describe('QuestionOptionService', () => {
  let service: QuestionOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
