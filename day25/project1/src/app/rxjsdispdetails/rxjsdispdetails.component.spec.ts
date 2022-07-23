import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsdispdetailsComponent } from './rxjsdispdetails.component';

describe('RxjsdispdetailsComponent', () => {
  let component: RxjsdispdetailsComponent;
  let fixture: ComponentFixture<RxjsdispdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsdispdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsdispdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
