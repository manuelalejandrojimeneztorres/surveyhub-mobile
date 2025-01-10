import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForbiddenPage } from './forbidden.page';

describe('ForbiddenPage', () => {
  let component: ForbiddenPage;
  let fixture: ComponentFixture<ForbiddenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
