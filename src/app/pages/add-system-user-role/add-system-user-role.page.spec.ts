import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSystemUserRolePage } from './add-system-user-role.page';

describe('AddSystemUserRolePage', () => {
  let component: AddSystemUserRolePage;
  let fixture: ComponentFixture<AddSystemUserRolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemUserRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
