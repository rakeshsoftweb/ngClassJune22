import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjsdisplay1Component } from './rxjsdisplay1.component';

describe('Rxjsdisplay1Component', () => {
  let component: Rxjsdisplay1Component;
  let fixture: ComponentFixture<Rxjsdisplay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rxjsdisplay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjsdisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
