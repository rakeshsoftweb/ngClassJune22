import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display6DetComponent } from './display6-det.component';

describe('Display6DetComponent', () => {
  let component: Display6DetComponent;
  let fixture: ComponentFixture<Display6DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display6DetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display6DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
