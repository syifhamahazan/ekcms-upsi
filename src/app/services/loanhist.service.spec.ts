import { TestBed } from '@angular/core/testing';

import { LoanhistService } from './loanhist.service';

describe('LoanhistService', () => {
  let service: LoanhistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanhistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
