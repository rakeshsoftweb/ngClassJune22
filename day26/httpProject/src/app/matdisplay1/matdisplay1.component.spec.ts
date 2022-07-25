import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matdisplay1Component } from './matdisplay1.component';

describe('Matdisplay1Component', () => {
  let component: Matdisplay1Component;
  let fixture: ComponentFixture<Matdisplay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matdisplay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Matdisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
