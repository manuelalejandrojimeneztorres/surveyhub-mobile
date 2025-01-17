import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRolePage } from './update-role.page';

describe('UpdateRolePage', () => {
  let component: UpdateRolePage;
  let fixture: ComponentFixture<UpdateRolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
