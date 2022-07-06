import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display8Component } from './display8.component';

describe('Display8Component', () => {
  let component: Display8Component;
  let fixture: ComponentFixture<Display8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
