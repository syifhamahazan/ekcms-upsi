import { TestBed } from '@angular/core/testing';

import { MyloanService } from './myloan.service';

describe('MyloanService', () => {
  let service: MyloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
