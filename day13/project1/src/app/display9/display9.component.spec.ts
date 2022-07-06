import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display9Component } from './display9.component';

describe('Display9Component', () => {
  let component: Display9Component;
  let fixture: ComponentFixture<Display9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
