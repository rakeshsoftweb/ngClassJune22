import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display4DetComponent } from './display4-det.component';

describe('Display4DetComponent', () => {
  let component: Display4DetComponent;
  let fixture: ComponentFixture<Display4DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display4DetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display4DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
