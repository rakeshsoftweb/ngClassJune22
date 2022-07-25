import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OredersComponent } from './orders.component';

describe('OredersComponent', () => {
  let component: OredersComponent;
  let fixture: ComponentFixture<OredersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OredersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OredersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
