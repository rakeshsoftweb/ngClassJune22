import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display1detComponent } from './display1det.component';

describe('Display1detComponent', () => {
  let component: Display1detComponent;
  let fixture: ComponentFixture<Display1detComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display1detComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Display1detComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
