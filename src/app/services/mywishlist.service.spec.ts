import { TestBed } from '@angular/core/testing';

import { MywishlistService } from './mywishlist.service';

describe('MywishlistService', () => {
  let service: MywishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
