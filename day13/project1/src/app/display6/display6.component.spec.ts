import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display6Component } from './display6.component';

describe('Display6Component', () => {
  let component: Display6Component;
  let fixture: ComponentFixture<Display6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
