import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display7Component } from './display7.component';

describe('Display7Component', () => {
  let component: Display7Component;
  let fixture: ComponentFixture<Display7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
