import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddResponsePage } from './add-response.page';

describe('AddResponsePage', () => {
  let component: AddResponsePage;
  let fixture: ComponentFixture<AddResponsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
