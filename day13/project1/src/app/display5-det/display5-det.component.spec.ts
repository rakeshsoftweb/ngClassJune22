import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display5DetComponent } from './display5-det.component';

describe('Display5DetComponent', () => {
  let component: Display5DetComponent;
  let fixture: ComponentFixture<Display5DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display5DetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display5DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
