import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display3Component } from './display3.component';

describe('Display3Component', () => {
  let component: Display3Component;
  let fixture: ComponentFixture<Display3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
