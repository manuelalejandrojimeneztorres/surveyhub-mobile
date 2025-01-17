import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSystemUserRolePage } from './update-system-user-role.page';

describe('UpdateSystemUserRolePage', () => {
  let component: UpdateSystemUserRolePage;
  let fixture: ComponentFixture<UpdateSystemUserRolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSystemUserRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
