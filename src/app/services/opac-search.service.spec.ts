import { TestBed } from '@angular/core/testing';

import { OpacSearchService } from './opac-search.service';

describe('OpacSearchService', () => {
  let service: OpacSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpacSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
