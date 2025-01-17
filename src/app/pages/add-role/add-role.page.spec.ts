import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRolePage } from './add-role.page';

describe('AddRolePage', () => {
  let component: AddRolePage;
  let fixture: ComponentFixture<AddRolePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
