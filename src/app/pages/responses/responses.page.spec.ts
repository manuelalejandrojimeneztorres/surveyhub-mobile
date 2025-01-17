import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsesPage } from './responses.page';

describe('ResponsesPage', () => {
  let component: ResponsesPage;
  let fixture: ComponentFixture<ResponsesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
