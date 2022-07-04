import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display5Component } from './display5.component';

describe('Display5Component', () => {
  let component: Display5Component;
  let fixture: ComponentFixture<Display5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
