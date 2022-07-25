import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplifecycleComponent } from './complifecycle.component';

describe('ComplifecycleComponent', () => {
  let component: ComplifecycleComponent;
  let fixture: ComponentFixture<ComplifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
