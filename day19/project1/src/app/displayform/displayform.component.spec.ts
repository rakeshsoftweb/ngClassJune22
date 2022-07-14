import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayformComponent } from './displayform.component';

describe('DisplayformComponent', () => {
  let component: DisplayformComponent;
  let fixture: ComponentFixture<DisplayformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
