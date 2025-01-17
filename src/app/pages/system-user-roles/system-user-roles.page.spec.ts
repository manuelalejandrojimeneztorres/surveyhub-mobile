import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemUserRolesPage } from './system-user-roles.page';

describe('SystemUserRolesPage', () => {
  let component: SystemUserRolesPage;
  let fixture: ComponentFixture<SystemUserRolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUserRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
