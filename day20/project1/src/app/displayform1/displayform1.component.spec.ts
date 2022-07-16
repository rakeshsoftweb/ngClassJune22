import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displayform1Component } from './displayform1.component';

describe('Displayform1Component', () => {
  let component: Displayform1Component;
  let fixture: ComponentFixture<Displayform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Displayform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Displayform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
