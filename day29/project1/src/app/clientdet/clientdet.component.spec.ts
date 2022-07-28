import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetComponent } from './clientdet.component';

describe('ClientdetComponent', () => {
  let component: ClientdetComponent;
  let fixture: ComponentFixture<ClientdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
