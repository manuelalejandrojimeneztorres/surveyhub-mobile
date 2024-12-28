import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSystemUserPage } from './update-system-user.page';

describe('UpdateSystemUserPage', () => {
  let component: UpdateSystemUserPage;
  let fixture: ComponentFixture<UpdateSystemUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSystemUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
