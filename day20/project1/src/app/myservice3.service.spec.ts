import { TestBed } from '@angular/core/testing';

import { Myservice3Service } from './myservice3.service';

describe('Myservice3Service', () => {
  let service: Myservice3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myservice3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
