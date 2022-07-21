import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplcdetailsComponent } from './complcdetails.component';

describe('ComplcdetailsComponent', () => {
  let component: ComplcdetailsComponent;
  let fixture: ComponentFixture<ComplcdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplcdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
