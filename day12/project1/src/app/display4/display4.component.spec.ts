import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display4Component } from './display4.component';

describe('Display4Component', () => {
  let component: Display4Component;
  let fixture: ComponentFixture<Display4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
