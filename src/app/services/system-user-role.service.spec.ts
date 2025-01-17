import { TestBed } from '@angular/core/testing';

import { SystemUserRoleService } from './system-user-role.service';

describe('SystemUserRoleService', () => {
  let service: SystemUserRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemUserRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
