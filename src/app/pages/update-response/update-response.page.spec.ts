import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateResponsePage } from './update-response.page';

describe('UpdateResponsePage', () => {
  let component: UpdateResponsePage;
  let fixture: ComponentFixture<UpdateResponsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
