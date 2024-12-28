import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSystemUserPage } from './add-system-user.page';

describe('AddSystemUserPage', () => {
  let component: AddSystemUserPage;
  let fixture: ComponentFixture<AddSystemUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
