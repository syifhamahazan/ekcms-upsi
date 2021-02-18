import { TestBed } from '@angular/core/testing';

import { SearchhistService } from './searchhist.service';

describe('SearchhistService', () => {
  let service: SearchhistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchhistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
