import { TestBed } from '@angular/core/testing';

import { LeavesbalService } from './leavesbal.service';

describe('LeavesbalService', () => {
  let service: LeavesbalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesbalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
